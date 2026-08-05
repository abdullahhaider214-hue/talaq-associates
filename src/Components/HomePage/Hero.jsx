import { NavLink } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-overlay">

        <div className="container">

          <div className="hero-content">

            <span className="hero-subtitle">
              Trusted Since 2017
            </span>

            <h1>
              Lightweight Concrete
              <br />
              & Construction
              <br />
              Solutions
            </h1>

            <p className="hero-description">
              Delivering complete building construction, CLC blocks,
              lightweight concrete, screed, and foaming agent solutions
              with a commitment to quality, innovation, and customer
              satisfaction.
            </p>

            <div className="hero-buttons">

              <NavLink
                to="/projects"
                className="hero-button"
              >
                Our Work
              </NavLink>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;