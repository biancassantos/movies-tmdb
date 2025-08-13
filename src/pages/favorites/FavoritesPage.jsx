import FavoritedMovieCard from "./components/FavoritedMovieCard"
import { useMovie } from "../../context/MovieContext"

function FavoritesPage() {
  const { favorites } = useMovie()

  return (
    <main id="favorites-page">
      <h1>Favoritos</h1>

      <section className="cards-container">
        {favorites.map(movie => {
          return (
          <FavoritedMovieCard 
          key={movie.id} 
          posterPath={movie.poster_path} 
          id={movie.id} 
          title={movie.title}
          />
        )})}
      </section>
    </main>
  )
}

export default FavoritesPage
