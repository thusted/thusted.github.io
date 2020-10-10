import React from "react";

//Import css
import "./style.css";

//Import components
import Slider from "../Slider";

function Modal ({id, title, modalDescription, imageArray}) {
  return (
    <div id={id} className="modal modal-fixed-footer">
    <div class="modal-content">
      <h4 className="text-center">{title}</h4>
      <p>{modalDescription}</p>
      <Slider imageArray={imageArray}/>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">x</a>
    </div>
  </div>
  )
}

export default Modal;