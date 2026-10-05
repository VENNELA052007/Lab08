import { NavLink } from 'react-router-dom'

function Navbar({ onLogout }) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <NavLink className="navbar-brand" to="/dashboard">
        <span className="brand-mark brand-mark-small" aria-hidden="true">SP</span>
        Student Portal
      </NavLink>
      <div className="navbar-links">
        <NavLink
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          to="/profile"
        >
          Profile
        </NavLink>
        <button className="button button-outline" onClick={onLogout} type="button">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
