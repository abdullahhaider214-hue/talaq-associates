import './AboutApproach.css';

function AboutApproach() {
  return (
    <section className="about-approach-section">
      <div className="container">

        <div className="about-approach-heading">

          <p className="about-label">
            OUR APPROACH
          </p>

          <h2>
            Simple thinking.
            <span> Practical results.</span>
          </h2>

        </div>


        <div className="approach-grid">

          <div className="approach-item">

            <span className="approach-number">
              01
            </span>

            <h3>
              Understand
            </h3>

            <p>
              We begin by understanding the requirements of each project
              and the challenges involved.
            </p>

          </div>


          <div className="approach-item">

            <span className="approach-number">
              02
            </span>

            <h3>
              Recommend
            </h3>

            <p>
              We help identify practical construction solutions suited to
              the specific needs of the project.
            </p>

          </div>


          <div className="approach-item">

            <span className="approach-number">
              03
            </span>

            <h3>
              Support
            </h3>

            <p>
              We provide technical guidance and product support to help
              customers achieve the best possible results.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutApproach;