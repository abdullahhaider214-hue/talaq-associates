import { NavLink } from "react-router-dom";
import "./AboutHome.css";

import aboutImage from "../../assets/images/Home Page/about-home.jpg";

function AboutHome() {
  return (
    <section className="about-home">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left */}

          <div className="col-lg-6">

            <span className="section-tag">
              ABOUT TALAQ ASSOCIATES
            </span>

            <h2 className="section-title">
              Building Better with Lightweight Concrete
            </h2>

            <p className="about-text">
              Since 2017, Talaq Associates has been delivering innovative
              lightweight concrete solutions across Pakistan. We specialize in
              premium CLC Foaming Agents, CLC Blocks, and technical support for
              durable, efficient, and modern construction.
            </p>

            <div className="founders-card">

              <small>Founders</small>

              <h4>
                Muhammad Naeem Saeed
                <span>&</span>
                Mian Imran
              </h4>

            </div>

            <NavLink
              to="/about"
              className="about-btn"
            >
              Learn More
            </NavLink>

          </div>

          {/* Right */}

          <div className="col-lg-6">

            <div className="about-image">

              <img
                src={aboutImage}
                alt="Commercial project completed using Talaq Associates lightweight concrete solutions"
              />

              

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutHome;