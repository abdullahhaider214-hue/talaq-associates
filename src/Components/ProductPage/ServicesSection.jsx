import "./ServicesSection.css";

import technicalSupport from "../../assets/images/services/technical-support.jpg";
import qualityConsultation from "../../assets/images/services/quality-consultation.jpg";

function ServicesSection() {
  return (
    <section className="services-section">

      <div className="container">

        <div className="services-heading">

          <p className="services-label">
            OUR SERVICES
          </p>

          <h2>
            Professional Support Beyond
            <span> Product Supply.</span>
          </h2>

          <p className="services-intro">
            At Talaq Associates, we do more than supply construction
            materials. We work closely with our clients by providing
            technical guidance, quality consultation, and practical
            recommendations throughout every stage of their projects.
          </p>

        </div>



        {/* Service 1 */}

        <div className="service-row">

          <div className="service-image">
            <img
              src={technicalSupport}
              alt="Technical Support"
            />
          </div>

          <div className="service-content">

            <h3>Technical Support</h3>

            <p>
              Our experienced team provides technical assistance for
              lightweight concrete applications, helping clients choose
              appropriate materials, optimize construction methods, and
              ensure efficient project execution.
            </p>

          </div>

        </div>



        {/* Service 2 */}

        <div className="service-row reverse">

          <div className="service-image">
            <img
              src={qualityConsultation}
              alt="Quality & Consultation"
            />
          </div>

          <div className="service-content">

            <h3>Quality & Consultation</h3>

            <p>
              We assist contractors, builders, and project owners with
              professional consultation and quality-focused recommendations,
              ensuring every solution meets performance expectations and
              construction requirements.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;