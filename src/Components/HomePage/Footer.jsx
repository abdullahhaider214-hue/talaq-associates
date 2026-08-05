import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="row g-5">

          {/* Company */}

          <div className="col-lg-5 col-md-6">

            <h3 className="footer-logo">
              Talaq Associates
            </h3>

            <p className="footer-description">
              Complete solutions for lightweight concrete, CLC technology,
              and modern construction materials, delivering quality,
              innovation, and reliability for every project.
            </p>

            <p className="footer-tagline">
              Lighter. Stronger. Smarter.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-3 col-md-6">

            <h4 className="footer-heading">
              Quick Links
            </h4>

            <div className="footer-links">

              <NavLink to="/">Home</NavLink>

              <NavLink to="/about">About Us</NavLink>

              <NavLink to="/products">Products & Services</NavLink>

              <NavLink to="/projects">Our Work</NavLink>

              <NavLink to="/contact">Contact</NavLink>

            </div>

          </div>

          {/* Contact */}

          <div className="col-lg-4 col-md-6">

            <h4 className="footer-heading">
              Contact
            </h4>

            <div className="footer-contact">

              <p>
                <i className="fas fa-phone"></i>
                <span>
                  0322-6060503
                  <br />
                  0306-5429035
                </span>
              </p>

              <p>
                <i className="fas fa-envelope"></i>
                <span>
                  talaqassociate@gmail.com
                </span>
              </p>

              <p>
                <i className="fas fa-location-dot"></i>
                <span>
                  Lahore, Pakistan
                </span>
              </p>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Talaq Associates. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;