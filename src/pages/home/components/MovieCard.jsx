import { Link } from "react-router"

function MovieCard({ title, year, id, posterPath }) {
  const posterUrl = `https://image.tmdb.org/t/p/original${posterPath}`

  return (
    <div className="movie-card">
      <div className="card-img-container">
        <img src={posterUrl} alt={`Pôster de "${title}"`} />
      </div>

      <div>
        <h2>{title.length > 40 ? `${title.substring(0, 37)}...` : title}</h2>
        <span>{year}</span>
        <Link to={`/movies-tmdb/movie/${id}`}>Detalhes</Link>
      </div>
    </div>
  )
}

export default MovieCard
