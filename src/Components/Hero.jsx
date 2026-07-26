import heroImage from '../assets/images/Hero.jpeg';

function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1>Building a Stronger Future</h1>

            <p>
              Reliable construction solutions with quality, strength, and
              innovation.
            </p>

            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;