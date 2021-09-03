import React from "react";

// Importing style
import "./style.css";

function MaterialBox ({imageArray}) {
  if(imageArray) {
    return (
      <div className="hide-on-med-and-up">
        {imageArray.map((image) => (
          <img className="materialboxed responsive-img" alt="projectImg" src={image}></img>
        ))}
      </div>
    ); 
  } else {
    return <div>No media to display on this project. Stay tuned!</div>
  };
};

export default MaterialBox;