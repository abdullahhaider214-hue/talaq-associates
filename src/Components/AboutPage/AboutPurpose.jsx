import aboutImage from '../../assets/images/About Page/Aboutpage1.jpg';

import './AboutPurpose.css';

function AboutPurpose() {
  return (
    <section className="about-purpose-section">
      <div className="container">

        <div className="about-purpose-grid">

          <div className="about-purpose-content">

            <p className="about-label">
              OUR PURPOSE
            </p>

            <h2>
              Building with
              <span> Purpose.</span>
            </h2>

            <p>
              Construction is constantly evolving. We believe that better
              materials and better technical understanding can help create
              more efficient and effective building solutions.
            </p>

            <p>
              Our goal is to provide products and support that help
              construction professionals make informed decisions and
              achieve reliable results.
            </p>

          </div>


          <div className="about-purpose-image">

            <img
              src={aboutImage}
              alt="Modern construction project"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPurpose;