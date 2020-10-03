import React from "react";
import { Link } from "react-router-dom";

//Import css
import "./style.css";

function Project ({className, imgSrc, title, description, link}) {
  return (
    <div className={className}>
      <Link
        to={link}
        className={window.location.pathname === {link} ? "nav-link active" : "nav-link"}
      >
        <div className="card hoverable">
          <div className="card-image">
            <img src={imgSrc} alt="cardImg"/>
          </div>
          <div className="card-content">
            <p><b>{title}</b> {description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Project;