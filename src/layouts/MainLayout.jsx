import { Link, NavLink, Outlet } from "react-router"
import { PiFilmReelFill } from "react-icons/pi"

function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/movies-tmdb"><PiFilmReelFill /></Link>
          <ul>
            <li><NavLink to="/movies-tmdb/favorites">Favoritos</NavLink></li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default MainLayout
