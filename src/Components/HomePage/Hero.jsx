import { NavLink } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-overlay">

        <div className="container">

          <div className="hero-content">

            <span className="hero-subtitle">
              TRUSTED SINCE 2017
            </span>

            <h1>
              Lightweight Concrete
              <br />
              & Construction
              <br />
              Solutions
            </h1>

            <p className="hero-description">
              Delivering complete building construction, lightweight concrete
              solutions, CLC blocks, screed, and foaming agent systems with a
              commitment to quality, innovation, and customer satisfaction.
            </p>

            <div className="hero-buttons">

              <NavLink
                to="/products"
                className="hero-button"
              >
                Our Products & Services
              </NavLink>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;