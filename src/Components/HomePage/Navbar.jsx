import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Home Page/talaq-logo.jpeg';

import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="main-navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Talaq Associates Logo"
          />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        {/* Navigation Menu */}
        <div
          className={`navbar-menu ${menuOpen ? 'show' : ''}`}
        >
          <div className="navbar-links">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
              onClick={closeMenu}
            >
              Products & Services
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
              onClick={closeMenu}
            >
              Our Work
            </NavLink>

           

          </div>

          

        </div>

      </div>
    </nav>
  );
}

export default Navbar;