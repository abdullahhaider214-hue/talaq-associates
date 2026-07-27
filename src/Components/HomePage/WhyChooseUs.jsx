import './WhyChooseUs.css';

import whyChooseImage from '../../assets/images/choose.jpg';

function WhyChooseUs() {
  const reasons = [
    'Premium Quality Products',
    'Advanced Foam Technology',
    'Reliable Technical Support',
    'Cost-Effective Solutions',
    'Consistent Performance',
    'Customer Satisfaction',
  ];

  return (
    <section className="why-choose-us py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Image */}
          <div className="col-lg-6">
            <div className="why-choose-image-wrapper">
              <img
                src={whyChooseImage}
                alt="Quality CLC blocks by Talaq Associates"
                className="img-fluid why-choose-image"
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <span className="section-subtitle">
              WHY CHOOSE US
            </span>

            <h2 className="section-title">
              Why Choose Talaq Associates?
            </h2>

            <p className="section-text">
              Quality, innovation, and customer satisfaction are the foundation
              of everything we do.
            </p>

            <div className="reasons-list">
              {reasons.map((reason, index) => (
                <div className="reason-item" key={index}>
                  <i className="fa-solid fa-check"></i>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;