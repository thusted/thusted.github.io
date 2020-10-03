import React from "react";

//Importing style
import "./style.css";

function Carousel() {
  return (
    <div class="col s12">
      <div class="carousel">
        <a class="carousel-item" href="#one!"><img alt="carouselImg" class="materialboxed" src="../images/alertify.png"/></a>
        <a class="carousel-item" href="#two!"><img alt="carouselImg" class="materialboxed" src="../images/alertifyLogin.png"/></a>
        <a class="carousel-item" href="#three!"><img alt="carouselImg" class="materialboxed" src="../images/alertifySignIn.png"/></a>
        <a class="carousel-item" href="#four!"><img alt="carouselImg" class="materialboxed" src="../images/alertifySignUp.png"/></a>
        <a class="carousel-item" href="#five!"><img alt="carouselImg" class="materialboxed" src="../images/alertifyTracker.png"/></a>
      </div>
    </div>
  );
};

export default Carousel;