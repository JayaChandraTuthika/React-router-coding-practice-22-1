import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-nav-bar">
    <h1 className="nav-bar-title">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-icon"
      />
      Wave
    </h1>
    <ul className="links-list-container">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
