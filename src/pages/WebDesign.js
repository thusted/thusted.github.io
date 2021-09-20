import React, { useEffect } from "react";
import M from "materialize-css";

// Importing images
import AhfemmeCover from "../images/ahfemmeCover.jpeg";
import Ahfemme1 from "../images/ahfemme1.jpeg";
import Ahfemme2 from "../images/ahfemme2.jpeg";
import Ahfemme3 from "../images/ahfemme3.jpeg";
import Ahfemme4 from "../images/ahfemme4.jpeg";
import Ahfemme5 from "../images/ahfemme5.jpeg";
import Ahfemme6 from "../images/ahfemme6.jpeg";
import Ahfemme7 from "../images/ahfemme7.jpeg";
import Ahfemme8 from "../images/ahfemme8.jpeg";
import Ahfemme9 from "../images/ahfemme9.jpeg";
import Ahfemme10 from "../images/ahfemme10.jpeg";
import Ahfemme11 from "../images/ahfemme11.jpeg";
import Ahfemme12 from "../images/ahfemme12.jpeg";
import Ahfemme13 from "../images/ahfemme13.jpeg";

// Importing components
import Project from "../components/Project";
import Header from "../components/Header";

//Image arrays
const ahfemmeImages = [Ahfemme1, Ahfemme2, Ahfemme3, Ahfemme4, Ahfemme5, Ahfemme6, Ahfemme7, Ahfemme8, Ahfemme9, Ahfemme10, Ahfemme11, Ahfemme12, Ahfemme13];

function WebDesign() {
  useEffect(() => {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems);
    M.AutoInit();
  })

  return (
    <div id="webDesignContainer">
      <Header title="WEB DESIGN" subtitle="PAST PROJECTS"/>
      <br/>

      <div className="webDesignProjectsContainer">
        <div className="section">
          <div className="row">
            <Project href="#modal17" id="modal17" className="col s12 m4 l4" imgSrc={AhfemmeCover} title="AHFEMME" modalDescription="Bezier Data Visualization uses bezier curves to plot data, using government CSV files from 2017. This sketch allows users to see a visual representation of how often (on a scale of percentage) the members of the Senate and House vote in line with Trump’s position."  imageArray={ahfemmeImages} tech={["Made with Squarespace"]} links={["https://github.com/thusted/Bezier-Data-Visualization", "https://youtu.be/Pd81FM694fs"]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;