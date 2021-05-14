import React, { useEffect } from "react";
import M from "materialize-css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Importing images
import House from "../images/bezierDataVisHouse.jpeg";
import Senate from "../images/bezierDataVisSenate.jpeg";

// Importing components
import Project from "../components/Project";
import Header from "../components/Header";
import Project2 from "../components/Project2";

//Image arrays
const bezierImages = [House, Senate];

function Processing() {
  AOS.init();

  useEffect(() => {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems);
    M.AutoInit();
  })

  return (
    <div>
      <Header title="PROCESSING (JAVA)" subtitle="PAST PROJECTS"/>
      <br/>

      <div className="container">
        <div className="section">
          <div className="row">
            <Project2 href="#modal3" id="modal3" className="col s12 m6 l6" imgSrc={House} title="Bezier Data Visualization" modalDescription="Bezier Data Visualization uses bezier curves to plot data, using government CSV files from 2017. This sketch allows users to see a visual representation of how often (on a scale of percentage) the members of the Senate and House vote in line with Trump’s position."  imageArray={bezierImages} tech={["Processing"]} links={["https://github.com/thusted/Bezier-Data-Visualization", "https://youtu.be/Pd81FM694fs"]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;