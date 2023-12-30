import { NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'
import { useState } from 'react'
import logo from '../../assets/logos/main-logo.png'

const Navbar = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div id="home" className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <ul className="nav-links">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <a href="/#partners">
            <li>Partners</li>
          </a>
          <a href="/#about">
            <li>About</li>
          </a>
          <a href="/#contact">
            <li>Contact</li>
          </a>
        </ul>

        <div className="login-box">
          {user ? (
            <span onClick={() => window.location.reload()}>Logout</span>
          ) : (
            <NavLink to="/login">login</NavLink>
          )}
        </div>

        <div
          className={`hamburger ${menuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <ul className={`mobile-navlinks ${menuOpen ? 'is-active' : ''}`}>
        <li>Partners</li>
        <li>About</li>
        <li>Contact</li>
        <li></li>
      </ul>
    </div>
  )
}

export default Navbar
