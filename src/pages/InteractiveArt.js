import React, { Component } from "react";

// Importing images
import MovingDolls from "../images/movingDolls.jpg";
import Dollhouse from "../images/dollhouse.jpg";
import SonicSteps from "../images/sonicSteps.JPG";
import Particles from "../images/particlesOfTheVoice.png";
import Binaries from "../images/binaries.png";

// Importing components
import Project from "../components/Project";
import Header from "../components/Header";

class InteractiveArt extends Component {
  render() {
    return (
      <div>
        <Header title="INTERACTIVE ART" subtitle="PAST PROJECTS"/>
        <br/>

        <div className="container">
          <div className="section">
            <Project className="col s12" imgSrc={MovingDolls} title="The Moving Dolls" description="is a robotics piece inspired by the rise of Spiritualism movement at the turn of the 19th century. Featured at Jacobs Gallery for Manual Experience exhibition, 2020." link="/movingdolls"/>
            <br/>

            <Project className="col s12" imgSrc={Dollhouse} title="The Dollhouse" description="is a two story, lifesize, interactive house, modeled after a turn of the century Victorian home. Comissioned for and featured at Burning Man 2019." link="/dollhouse"/>
            <br/>

            
          </div>
        </div>
      </div>
    );
  }
}

export default InteractiveArt;
