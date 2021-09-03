import React from "react";

//Import css
import "./style.css";

//Import components
import Slider from "../Slider";
import MaterialBox from "../MaterialBox";

function Modal ({id, title, modalDescription, imageArray, tech, links}) {
  if(tech && links){
    return (
      <div id={id} className="modal modal-fixed-footer">
      <div className="modal-content">
        <div>
          <h4 className="text-center">{title}</h4>
          <p className="modalDescription">{modalDescription}</p>
          <br/>

          <Slider imageArray={imageArray}/>
          <MaterialBox imageArray={imageArray}/>
          <br/><br/>

          <h5 className="techUsed">Technologies Used</h5>
            <div className="tech">{tech.join(", ")}</div>
          <br/><br/>
      
          <h5 className="link">Links</h5>
            {links.map((link) => (
              <div key={link}>
                <a href={link} target="_blank" rel="noreferrer noopener">{link}</a>
                <br/>
              </div>
            ))}
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">x</a>
      </div>
    </div>
    )
  } else {
    return <div>Placeholder</div>
  };
};

export default Modal;