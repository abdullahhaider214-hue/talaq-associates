import "./ProductCard.css";

function ProductCard({
  number,
  title,
  description,
  features,
  image,
  reverse = false,
}) {
  return (
    <section className={`product-card ${reverse ? "reverse" : ""}`}>
      <div className="container">
        <div className="product-grid">

          {/* Image */}

          <div className="product-image">
            <img src={image} alt={title} />
          </div>

          {/* Content */}

          <div className="product-content">

            <p className="product-number">
              {number}
            </p>

            <h2>{title}</h2>

            <p className="product-description">
              {description}
            </p>

            <ul className="product-features">
              {features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductCard;