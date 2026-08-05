import { NavLink } from "react-router-dom";
import "./NotFound.css";


function NotFound() {

  return (

    <section className="not-found">

      <div className="container">


        <h1>
          404
        </h1>


        <h2>
          Page Not Found
        </h2>


        <p>
          Sorry, the page you are looking for does not exist.
        </p>


        <NavLink 
          to="/" 
          className="home-btn"
        >
          Back To Home
        </NavLink>


      </div>

    </section>

  );

}


export default NotFound;