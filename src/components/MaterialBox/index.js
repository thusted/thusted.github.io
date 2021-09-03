import React from "react";

function MaterialBox ({imageArray}) {
  if(imageArray) {
    return (
      <div className="hide-on-med-and-up">
        <div>Hi</div>
      </div>
    ); 
  } else {
    return <div>No media to display on this project. Stay tuned!</div>
  };
};

export default MaterialBox;