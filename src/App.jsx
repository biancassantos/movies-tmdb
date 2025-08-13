import { BrowserRouter as Router, Routes, Route } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Homepage from "./pages/home/Homepage"
import MoviePage from "./pages/movie/MoviePage"
import FavoritesPage from "./pages/favorites/FavoritesPage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="movie/:id" element={<MoviePage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
