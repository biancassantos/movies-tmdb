import { Link, NavLink, Outlet } from "react-router"
import { PiFilmReelFill } from "react-icons/pi"

function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/"><PiFilmReelFill /></Link>
          <ul>
            <li><NavLink to="/favorites">Favoritos</NavLink></li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default MainLayout
