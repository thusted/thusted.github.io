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
import DavidCover from "../images/davidCover.jpeg";
import David1 from "../images/david1.jpeg";
import David2 from "../images/david2.jpeg";
import David3 from "../images/david3.jpeg";
import David4 from "../images/david4.jpeg";
import David5 from "../images/david5.jpeg";
import David6 from "../images/david6.jpeg";

// Importing components
import Project from "../components/Project";
import Header from "../components/Header";

//Image arrays
const ahfemmeImages = [Ahfemme1, Ahfemme2, Ahfemme3, Ahfemme4, Ahfemme5, Ahfemme6, Ahfemme7, Ahfemme8, Ahfemme9, Ahfemme10, Ahfemme11, Ahfemme12, Ahfemme13];
const davidImages = [David1, David2, David3, David4, David5, David6];

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
            <Project href="#modal17" id="modal17" className="col s12 m4 l4" imgSrc={AhfemmeCover} title="AHFEMME" modalDescription="AHFEMME is a queer art collective, birthed from the cosmos. They use a variety of mediums to produce multi-sensory interactive performances and events. This website was created for the artists to let the people know who they are and what they're doing, as well as donate to current and future projects."  imageArray={ahfemmeImages} tech={["Designed and created with Squarespace"]} links={["https://www.ahfemme.com"]}/>
            <Project href="#modal18" id="modal18" className="col s12 m4 l4" imgSrc={DavidCover} title="DAVID HANIG" modalDescription="David Hanig is an author and poet, based out of Washington state. David wanted a simple design to primarily help promote the launch of his new book. Additionally, he wanted sections to showcase his poetic works, in both written blog and video form."  imageArray={davidImages} tech={["Designed and created with WordPress"]} links={["https://www.davidhanig.com"]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;