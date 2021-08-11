import React, { useEffect } from "react";
import M from "materialize-css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Importing images
import House from "../images/bezierDataVisHouse.jpeg";
import Senate from "../images/bezierDataVisSenate.jpeg";
import RunAwayBallons from "../images/runawayBalloons.jpeg";
import RunAwayBeard from "../images/runawayBeard.jpeg";
import RunAwayButtons from "../images/runawayButtons.jpeg";
import RunAwayHome from "../images/runawayHome.jpeg";
import RunAwayPope from "../images/runawayPope.jpeg";

// Importing components
import Project from "../components/Project";
import Header from "../components/Header";

//Image arrays
const bezierImages = [House, Senate];
const runawayImages = [RunAwayHome,RunAwayBeard, RunAwayBallons, RunAwayButtons, RunAwayPope];

function Processing() {
  AOS.init();

  useEffect(() => {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems);
    M.AutoInit();
  })

  return (
    <div id="processingContainer">
      <Header title="PROCESSING (JAVA)" subtitle="PAST PROJECTS"/>
      <br/>

      <div className="container">
        <div className="section">
          <div className="row">
            <Project href="#modal3" id="modal3" className="col s12 m6 l6" imgSrc={House} title="Bezier Data Visualization" modalDescription="Bezier Data Visualization uses bezier curves to plot data, using government CSV files from 2017. This sketch allows users to see a visual representation of how often (on a scale of percentage) the members of the Senate and House vote in line with Trump’s position."  imageArray={bezierImages} tech={["Processing"]} links={["https://github.com/thusted/Bezier-Data-Visualization", "https://youtu.be/Pd81FM694fs"]}/>

            <Project href="#modal16" id="modal16" className="col s12 m6 l6" imgSrc={RunAwayHome} title="Run Away" modalDescription="This app is a silly game called Run Away, made for Android. Each button on the homescreen takes users to a level that tackles an obscure and unusual fear. The screen is populated by people running away from the object of that specific fear. If the user swipes over them, they are consumed by the fear and a counter in the top right corner will keep track of the number of people consumed. The fears addressed in this game are fear of beards, fear of balloons, fear of navel, and fear of the Pope."  imageArray={runawayImages} tech={["Processing"]} links={["https://github.com/thusted/Run-Away", "https://youtu.be/aX4bDh7qBKw"]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;