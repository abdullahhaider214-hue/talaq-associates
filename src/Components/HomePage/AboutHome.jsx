import aboutImage from '../../assets/images/Home Page/Aboutpic.jpeg';
import './AboutHome.css';


function AboutHome() {
  return (
    <section className="about-intro py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Text - Left Side */}
          <div className="col-lg-6">
            <span className="section-subtitle">
              ABOUT TALAQ ASSOCIATES
            </span>

            <h2 className="section-title">
              Complete Solutions for the Lightweight Concrete Industry
            </h2>

            <p className="section-text">
              Talaq Associates is a trusted manufacturer and supplier of
              high-quality CLC Foaming Agents and CLC Blocks in Pakistan. We
              are committed to delivering innovative products that help
              customers produce lightweight, durable, and cost-effective
              concrete.
            </p>

            <p className="section-text">
              Our Hybrid Protein + Synthetic CLC Foaming Agent is specially
              developed to provide excellent foam stability, uniform cell
              structure, and consistent density for CLC blocks, CLC screed,
              and other lightweight concrete applications.
            </p>

            <p className="section-text">
              At Talaq Associates, we believe that customer success is our
              success. We provide premium-quality products, technical
              guidance, product support, and practical solutions to help our
              customers achieve the best possible results.
            </p>

            <a href="/about" className="btn btn-dark mt-3">
              Learn More About Us
            </a>
          </div>

          {/* Image - Right Side */}
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <img
                src={aboutImage}
                alt="Talaq Associates lightweight concrete solutions"
                className="img-fluid about-image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutHome;