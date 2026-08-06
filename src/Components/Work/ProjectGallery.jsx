import { useState, useEffect, useRef } from "react";
import "./ProjectGallery.css";

import P1 from "../../assets/images/Projects/P1.jpg";
import P2 from "../../assets/images/Projects/P2.jpg";
import P3 from "../../assets/images/Projects/P3.jpg";
import P4 from "../../assets/images/Projects/P4.jpg";
import P5 from "../../assets/images/Projects/P5.jpg";
import P6 from "../../assets/images/Projects/P6.jpg";
import P7 from "../../assets/images/Projects/P7.jpg";

function ProjectGallery() {

  const images = [
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();

    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();

    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };


  const handleTouchStart = (e) => {

  touchStartX.current = e.changedTouches[0].screenX;

};

const handleTouchEnd = (e) => {

  touchEndX.current = e.changedTouches[0].screenX;

  const distance = touchStartX.current - touchEndX.current;

  if (Math.abs(distance) < 50) return;

  if (distance > 0) {

    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );

  } else {

    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  }

};


  useEffect(() => {

  const handleKeyDown = (e) => {

    if (selectedIndex === null) return;

    if (e.key === "ArrowRight") {

      setSelectedIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }

    if (e.key === "ArrowLeft") {

      setSelectedIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );

    }

    if (e.key === "Escape") {

      closeImage();

    }

  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };

}, [selectedIndex]);

  return (
    <section className="project-gallery">

      <div className="container">

        {/* Heading */}

        <div className="gallery-heading">

          <h1>
            OUR WORK
          </h1>

        </div>

        {/* Gallery */}

        <div className="gallery-grid">

          {images.map((image, index) => (

            <div
              className="gallery-item"
              key={index}
              onClick={() => openImage(index)}
            >

              <img
                src={image}
                alt={`Talaq Associates Project ${index + 1}`}
                loading="lazy"
              />

            </div>

          ))}

        </div>

        {/* Lightbox */}

        {selectedIndex !== null && (

          <div
            className="image-modal"
            onClick={closeImage}
          >

            <button
              className="close-btn"
              onClick={closeImage}
            >
              &times;
            </button>

            <button
              className="prev-btn"
              onClick={prevImage}
            >
              &#10094;
            </button>

            <img
              src={images[selectedIndex]}
              alt={`Project ${selectedIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />

            <div
              className="image-counter"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedIndex + 1} / {images.length}
            </div>

            <button
              className="next-btn"
              onClick={nextImage}
            >
              &#10095;
            </button>

          </div>

        )}

      </div>

    </section>
  );
}

export default ProjectGallery;