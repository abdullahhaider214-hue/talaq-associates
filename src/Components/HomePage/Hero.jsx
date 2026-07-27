import { NavLink } from 'react-router-dom';
import heroImage from '../../assets/images/Hero1.jpeg';
import './Hero.css';

function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">

            <p className="hero-subtitle">
              LIGHTWEIGHT CONCRETE SOLUTIONS
            </p>

            <h1>
              Building a Stronger Future
            </h1>

            <p className="hero-description">
              High-quality CLC foaming agents, CLC blocks, and lightweight
              concrete solutions for modern construction.
            </p>

            <div className="hero-buttons">

              <NavLink
                to="/products"
                className="hero-button hero-button-primary"
              >
                Explore Our Services
                <i className="fas fa-arrow-right"></i>
              </NavLink>

              <NavLink
                to="/projects"
                className="hero-button hero-button-secondary"
              >
                View Our Work
                <i className="fas fa-arrow-right"></i>
              </NavLink>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;