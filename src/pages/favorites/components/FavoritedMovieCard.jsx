import { Link } from "react-router"

function FavoritedMovieCard({ posterPath, id, title }) {
  const posterUrl = `https://image.tmdb.org/t/p/original${posterPath}`

  return (
    <Link to={`/movie/${id}`} className="favorited-movie-link">
      <div className="favorited-movie-card">
        <img src={posterUrl} alt={`Pôster de "${title}"`} />
      </div>
    </Link>
  )
}

export default FavoritedMovieCard
