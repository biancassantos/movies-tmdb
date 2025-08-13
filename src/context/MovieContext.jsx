import { createContext, useState, useContext, useEffect, useCallback, useMemo } from "react"

const MovieContext = createContext(null)

export const useMovie = () => useContext(MovieContext)

const movies = localStorage.getItem("userFavorites") ? JSON.parse(localStorage.getItem("userFavorites")) : []


function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState(movies)

  // sets localStorage everytime favorites is updated
  useEffect(() => {
    localStorage.setItem("userFavorites", JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = useCallback((movie) => {
    setFavorites([...favorites, movie])
  }, [favorites])

  const removeFavorite = useCallback((id) => {
    const filteredFavorites = favorites.filter(movie => movie.id !== id)
    setFavorites(filteredFavorites)
  }, [favorites])


  const value = useMemo(() => ({favorites, addFavorite, removeFavorite}), [favorites, addFavorite, removeFavorite])

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider
