import React from "react";

//Import css
import "./mainHeaderStyle.css";

function MainHeader ({title, subtitle}) {
  return (
    <div id="name-container">
      <h3 className="title"><b>{title}</b></h3>
      <h6 className="subtitle"><b>{subtitle}</b></h6>
    </div>
  );
};

export default MainHeader;