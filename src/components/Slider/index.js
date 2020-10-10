import React from "react";

//Importing style
import "./style.css";

function Slider({imageArray}) {
  if(imageArray){
    return (
      <div class="slider">
        <ul class="slides">
          {imageArray.map((image) => (
            <li key={image}><img alt="sliderImg" src={image}/></li>
          ))}
        </ul>
      </div>
    )
  } else {
    return <div>Placeholder</div>
  }
}

export default Slider;