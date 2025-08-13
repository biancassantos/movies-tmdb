import axios from "axios"

const baseUrl = "https://api.themoviedb.org/3"
const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
  }
}

// fetches all movies that match the searched title
const getMovies = async (movieSearched, page = 1) => {
  const res = await axios.get(`${baseUrl}/search/movie?query=${movieSearched}&page=${page}`, options)
  return res.data
}

// fetches the clicked movie's information 
const getMovie = async (id) => {
  const res = await axios.get(`${baseUrl}/movie/${id}`, options)
  return res.data
}

// fetches the clicked movie's credits
const getMovieCredits = async (id) => {
  const res = await axios.get(`${baseUrl}/movie/${id}/credits`, options)
  return res.data
}

export default { getMovies, getMovie, getMovieCredits }
