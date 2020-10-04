import React from "react";

//Importing style
import "./style.css";

function Carousel({imageSrc}) {
  return (
    <div className="col s12">
      <div className="carousel">
        <img className="carousel-item" alt="carouselImg" src={imageSrc}/>
        <img className="carousel-item" alt="carouselImg" src={imageSrc}/>
        <img className="carousel-item" alt="carouselImg" src={imageSrc}/>
      </div>
    </div>
  );
};

export default Carousel;