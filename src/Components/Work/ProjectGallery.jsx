import { useState } from "react";
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
    P7
  ];


  const [selectedImage, setSelectedImage] = useState(null);


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
              onClick={() => setSelectedImage(image)}
            >

              <img
                src={image}
                alt={`Talaq Associates Project ${index + 1}`}
              />

            </div>

          ))}


        </div>



        {/* Lightbox */}

        {selectedImage && (

          <div
            className="image-modal"
            onClick={() => setSelectedImage(null)}
          >


            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>



            <img
              src={selectedImage}
              alt="Full Size Project"
              onClick={(e) => e.stopPropagation()}
            />


          </div>

        )}


      </div>

    </section>

  );

}


export default ProjectGallery;