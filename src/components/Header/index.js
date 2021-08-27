import React from "react";

//Import css
import "./headerStyle.css";

function Header ({title, subtitle, id}) {
  return (
    <div class="name-container" id={id}>
      <h4><b>{title}</b></h4>
      <h6>{subtitle}</h6>
    </div>
  );
};

export default Header;