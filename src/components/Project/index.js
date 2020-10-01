import React from "react";
import { Link } from "react-router-dom";

function Project ({imgSrc, title, description, link}) {
  return (
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-image">
            <img src={imgSrc} alt="cardImg"/>
          </div>
          <div class="card-content">
            <p><b>{title}</b> {description}</p>
          </div>
          <div class="card-action">
            <Link
              to={link}
              className={window.location.pathname === {link} ? "nav-link active" : "nav-link"}
            >
              VIEW PROJECT
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;