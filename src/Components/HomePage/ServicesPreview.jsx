import { NavLink } from 'react-router-dom';
import './ServicesPreview.css';


import foamingAgentsImage from '../../assets/images/services/foaming-agents.jpg';
import clcBlocksImage from '../../assets/images/services/clc-blocks.jpg';
import clcScreedImage from '../../assets/images/services/clc-screed.jpg';
import lightweightConcreteImage from '../../assets/images/services/lightweight-concrete.jpg';
import technicalSupportImage from '../../assets/images/services/technical-support.jpg';
import qualityConsultationImage from '../../assets/images/services/quality-consultation.jpg';

function ServicesPreview() {
  const services = [
    {
      image: foamingAgentsImage,
      title: 'CLC Foaming Agents',
      description:
        'High-quality foaming agents developed for lightweight concrete applications.',
    },
    {
      image: clcBlocksImage,
      title: 'CLC Blocks',
      description:
        'Lightweight, durable, and cost-effective blocks for modern construction.',
    },
    {
      image: clcScreedImage,
      title: 'CLC Screed',
      description:
        'Lightweight screed solutions for construction and flooring applications.',
    },
    {
      image: lightweightConcreteImage,
      title: 'Lightweight Concrete',
      description:
        'Complete solutions designed to help reduce structural load and improve efficiency.',
    },
    {
      image: technicalSupportImage,
      title: 'Technical Support',
      description:
        'Mix design, density testing, optimization, and on-site production guidance.',
    },
    {
      image: qualityConsultationImage,
      title: 'Quality & Consultation',
      description:
        'Quality control, product consultation, and reliable after-sales technical support.',
    },
  ];

  return (
    <section className="services-preview py-5">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span className="section-subtitle">WHAT WE PROVIDE</span>

          <h2 className="section-title">
            Complete Lightweight Concrete Solutions
          </h2>

          <p className="section-text mx-auto">
            We provide complete solutions for the lightweight concrete and
            construction industry, from quality products to technical support
            and practical guidance.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <NavLink
                to="/services"
                className="service-card-link"
              >
                <div
                  className="service-preview-card"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                >
                  <div className="service-card-overlay">
                    <div className="service-preview-content">
                      <h3>{service.title}</h3>

                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <NavLink to="/services" className="btn btn-dark">
            View All Services
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;