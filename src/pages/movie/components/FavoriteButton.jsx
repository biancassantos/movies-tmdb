import { useMovie } from "../../../context/MovieContext"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"

function FavoriteButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useMovie()

  const isFavorite = favorites.find(favorite => favorite.id === movie.id)

  const handleClick = () => {
    isFavorite ? removeFavorite(movie.id) : addFavorite(movie)
  }

  return (
    <button 
    id="favorite-btn" 
    onClick={handleClick}
    title={isFavorite ? "Remover favorito" : "Adicionar favorito"}
    >
      {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
    </button>
  )
}

export default FavoriteButton
