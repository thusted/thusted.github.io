import React from "react";
import { Link } from "react-router-dom";

function Project ({className, imgSrc, title, description, link}) {
  return (
    <div className={className}>
      <div className="card">
        <div className="card-image">
          <img src={imgSrc} alt="cardImg"/>
        </div>
        <div className="card-content">
          <p><b>{title}</b> {description}</p>
        </div>
        <div className="card-action">
          <Link
            to={link}
            className={window.location.pathname === {link} ? "nav-link active" : "nav-link"}
          >
            VIEW PROJECT
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project;