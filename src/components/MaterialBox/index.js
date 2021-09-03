import React from "react";

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