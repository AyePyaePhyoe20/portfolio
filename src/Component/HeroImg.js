import "./HeroImg.css";

import React from "react";
import books from "../assets/books-plant.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={books} alt="books" />
      </div>
      <div className="content">
        <p>HI, I'M A FRONT-END DEVELOPER</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
