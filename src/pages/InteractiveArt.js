import React, { Component } from "react";
import M from "materialize-css";

// Importing images
import MovingDolls from "../images/movingDolls.jpg";
import MovingDollsCabinet from "../images/movingDollsCabinet.jpeg";
import MovingDollsGallery from "../images/movingDollsGallery.jpeg";
import Dollhouse from "../images/dollhouse.jpg";
import DollhouseDark from "../images/dollhouseDark.jpeg";
import DollhouseBack from "../images/dollhouseBack.jpeg";
import DollhouseDesert from "../images/dollhouseDesert.png";
import DollhouseHeart from "../images/dollhouseHeart.jpeg";
import DollhousePig from "../images/dollhousePig.png";
import DollhouseTable from "../images/dollhouseTable.png";
import SonicSteps from "../images/sonicSteps.JPG";
import SonicKids from "../images/sonicKids.png";
import SonicTallKid from "../images/sonicTallKid.JPG";
import SonicBuild from "../images/sonicBuild.png";
import SonicBuild2 from "../images/sonicBuild2.JPG";
import Particles from "../images/particlesOfTheVoice.png";
import ParticleBoxes from "../images/particlesaBoxes.png";
import ParticlesCircuit from "../images/particlesCircuit.png";
import Binaries from "../images/binaries.png";
import BinariesClose from "../images/binariesClose.JPG";
import BinariesMakey from "../binariesMakey.png";
import BinariesWall from "../images/binariesWall.png";
import BinariesWiring from "../images/binariesWiring.png";

// Importing components
import Project from "../components/Project";
import Header from "../components/Header";

class InteractiveArt extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems);
    M.AutoInit();
  }

  render() {
    const movingDollsImages = [MovingDolls, MovingDollsCabinet, MovingDollsGallery];

    const dollhouseImages = [Dollhouse, DollhouseDark, DollhouseBack, DollhouseDesert, DollhouseHeart, DollhousePig, DollhouseTable];

    const sonicStepsImages = [SonicSteps, SonicKids, SonicTallKid, SonicBuild, SonicBuild2];

    const particlesImages = [Particles, ParticleBoxes, ParticlesCircuit];

    const binariesImages = [Binaries, BinariesClose, BinariesMakey, BinariesWall, BinariesWiring];

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

            <Project className="col s12" imgSrc={SonicSteps} title="Sonic Steps" description="is a sound-based installation where participants were welcomed to walk across a grid of stepping stones, each triggering a different sound. Commissioned for and featured at Wilsonville Festival of Arts 2018." link="/sonicsteps"/>
            <br/>

            <Project className="col s12" imgSrc={Particles} title="Particles" description="is a visual representation of the human voice in the form of animated particles. These particles are visualized through projection mapping onto a an arrangement of spray-painted boxes." link="/particles"/>
            <br/>

            <Project className="col s12" imgSrc={Binaries} title="Binaries" description="s an interactive painting, using capacitive touch sensors to trigger sound." link="/binaries"/>
          </div>
        </div>
      </div>
    );
  }
}

export default InteractiveArt;
