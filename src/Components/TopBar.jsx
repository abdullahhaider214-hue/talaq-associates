import './TopBar.css';


function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-content">
          <div className="company-tagline">
            <i className="fas fa-building"></i>
            <span>Talaq Associates — Lightweight Concrete Solutions</span>
          </div>

          <div className="contact-info">
            <a href="tel:03226060503">
              <i className="fas fa-phone"></i>
              0322-6060503
            </a>

            <a href="tel:03065429035">
              <i className="fas fa-phone"></i>
              0306-5429035
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;