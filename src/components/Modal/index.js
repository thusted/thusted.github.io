import React from "react";

//Import css
import "./style.css";

//Import components
import Slider from "../Slider";

function Modal ({id, title, modalDescription, imageArray, tech, links}) {
  if(tech && links){
    return (
      <div id={id} className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4 className="text-center">{title}</h4>
        <p>{modalDescription}</p>
        <Slider imageArray={imageArray}/>
        <h5>Technologies Used</h5>
          <ul>
            {tech.map((techItem) => (
              <li key={techItem}>{techItem}</li>
            ))}
          </ul>
        <h5>Links</h5>
          <ul>
            {links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
      </div>
      <div className="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">x</a>
      </div>
    </div>
    )
  } else {
    return <div>Placeholder</div>
  }
  
}

export default Modal;