import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import FavoriteButton from "./components/FavoriteButton"
import Cast from "./components/Cast"
import ErrorMessage from "../../components/ErrorMessage"
import Spinner from "../../components/Spinner"
import movieService from "../../services/movieService"
import { FaStar, FaArrowLeft } from "react-icons/fa"

function MoviePage() {
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])
  const [director, setDirector] = useState({})
  const [isPending, setIsPending] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const { id } = useParams()
  const navigate = useNavigate()

  const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

  useEffect(() => {
    setIsPending(true)
    const fetchMovie = async () => {
      const data = await movieService.getMovie(id)
      setMovie(data)
    }

    try {
      fetchMovie()
    } catch (error) {
      if (error.response)
       setErrorMessage(`Algo deu errado. Erro: ${error.response.data.status_message}`)
    }

    setIsPending(false)
  }, [id])

  useEffect(() => {
    setIsPending(true)
    const fetchCredits = async () => {
      const data = await movieService.getMovieCredits(id)
      const movieDirector = data.crew.filter(member => member.job === "Director")
      setCast(data.cast.slice(0, 10))
      setDirector(movieDirector[0])
    }

    try {
      fetchCredits()
    } catch (error) {
      if (error.response)
       setErrorMessage(`Algo deu errado. Erro: ${error.response.data.status_message}`)
    }
    
    setIsPending(false)
  }, [id])

  if (isPending && !errorMessage) return <Spinner />

  return errorMessage ? <ErrorMessage message={errorMessage} /> : (
    <main id="movie-page" style={{backgroundImage: `url(${backdropUrl})`}}>
      <div className="backdrop">
        <section id="movie-container">
          <button 
          id="go-back-btn" 
          onClick={() => navigate(-1)}>
            <FaArrowLeft /> Voltar
          </button>

          <img src={posterUrl} alt={`Pôster de "${movie.title}"`} />
          
          <section id="movie-info">
            <div id="movie-title-header">
              <h1>{movie.title}</h1>
              <FavoriteButton movie={movie} />
            </div>
            
            <span>{movie.release_date?.substring(0, 4)}</span>

            <p>
              {movie.genres?.map((genre, i) => {
                return i === movie.genres.length - 1 ? genre.name : genre.name + ", " 
              })}
            </p>

            <span id="vote-avg">
              <FaStar id="star" /> 
              {movie.vote_average?.toFixed(1)}
            </span>
            
            <p id="movie-overview">{movie.overview}</p>

            <section>
              <h2>Direção</h2>
              <p>{director?.name}</p>
            </section>
            
            <Cast cast={cast} />
          </section>
        </section>
      </div>
    </main>
  )
}

export default MoviePage
