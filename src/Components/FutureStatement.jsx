import { NavLink } from 'react-router-dom';

import futureConstructionImage from '../assets/images/future-construction.jpg';

function FutureStatement() {
  return (
    <section
      className="future-statement"
      style={{
        backgroundImage: `url(${futureConstructionImage})`,
      }}
    >
      <div className="future-statement-overlay">
        <div className="container">
          <div className="future-statement-content text-center">
            <span className="section-subtitle">
              BUILDING THE FUTURE
            </span>

            <h2>
              LIGHTER. STRONGER. SMARTER.
            </h2>

            <p>
              Building the future with innovative lightweight concrete solutions.
            </p>

            <NavLink
              to="/services"
              className="btn btn-light future-statement-btn"
            >
              Explore Our Solutions
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureStatement;