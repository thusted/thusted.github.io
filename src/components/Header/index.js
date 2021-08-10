import React from "react";

//Import css
import "./style.css";

function Header ({title, subtitle}) {
  return (
    <div id="name-container">
      <h3><b>{title}</b></h3>
      <h6><b>{subtitle}</b></h6>
    </div>
  );
};

export default Header;