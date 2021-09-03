import React from "react";

function MaterialBox ({imageArray}) {
  if(imageArray) {
    return (
      <div className="show-on-med-and-down">
        <div>Hi</div>
      </div>
    ); 
  } else {
    return <div>No media to display on this project. Stay tuned!</div>
  };
};

export default MaterialBox;