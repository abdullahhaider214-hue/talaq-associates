import "./FloatingSocials.css";

function FloatingSocials() {
  return (
    <div className="floating-socials">

      <a
        href="https://wa.me/923226060503"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>

      <a
        href="https://www.facebook.com/share/1GG6CM48Ye/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn facebook"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-f"></i>
        <span>Facebook</span>
      </a>

    </div>
  );
}

export default FloatingSocials;