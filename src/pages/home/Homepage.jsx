import { useState } from "react"
import movieService from "../../services/movieService"
import MovieCard from "./components/MovieCard"
import Pagination from "./components/Pagination"
import ErrorMessage from "../../components/ErrorMessage"
import Spinner from "../../components/Spinner"
import { FaSearch } from "react-icons/fa"

function Homepage() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("Bem-vindo(a) ao Catálogo de Filmes")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isPending, setIsPending] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // fetches the movies results when first searched
  const handleSubmit = async (e) => {
    e.preventDefault()
    setCurrentPage(1)
    setIsPending(true)

    try {
      setTitle(`Resultados para "${search}"`)
      const data = await movieService.getMovies(search)
      setMovies(data.results)
      setTotalPages(data.total_pages)
    } catch (error) {
      if (error.response)
       setErrorMessage(`Algo deu errado. Erro: ${error.response.data.status_message}`)
    }

    setIsPending(false)
  }

  // fetches movies results for another page
  const paginate = async (newPage) => {
    setCurrentPage(newPage)
    try {
      const data = await movieService.getMovies(search, newPage)
      setMovies(data.results)
    } catch (error) {
      if (error.response)
       setErrorMessage(`Algo deu errado. Erro: ${error.response.data.status_message}`)
    }
  }

  return (
    <main id="homepage">
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Pesquisar filme..."
        />
        <button type='submit'><FaSearch /></button>
      </form>

      <h1>{title}</h1>

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {isPending ? <Spinner /> : 
        (<>
          <section className="cards-container">
            {movies?.map(movie => {
              return <MovieCard 
              key={movie.id}
              title={movie.title}
              year={movie.release_date?.substring(0, 4)}
              id={movie.id}
              posterPath={movie.poster_path}
              />
            })}
          </section>

          <Pagination 
          totalPages={totalPages} 
          paginate={paginate} 
          currentPage={currentPage} 
          />
        </>)
      }
    </main>
  )
}

export default Homepage
