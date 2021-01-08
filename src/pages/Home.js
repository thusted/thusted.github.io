import React, {useEffect} from "react";
import M from "materialize-css";

//Import css
import "./pageStyle.css";

//Import images
import Dollhouse1 from "../images/dollhouse1.jpg";
import Me from "../images/me.png";
import Dollhouse2 from "../images/dollhouse2.jpg";
import Alertify from "../images/alertify.png";
import AlertifyLogin from "../images/alertifyLogin.png";
import AlertifySignIn from "../images/alertifySignIn.png";
import AlertifySignUp from "../images/alertifySignUp.png";
import AlertifyTracker from "../images/alertifyTracker.png";
import DollhouseBack from "../images/dollhouseBack.jpeg";
import Dollhouse3 from "../images/dollhouse3.jpg";
import Dollhouse from "../images/dollhouse.jpg";
import DollhouseDark from "../images/dollhouseDark.jpeg";
import DollhouseDesert from "../images/dollhouseDesert.png";
import DollhouseHeart from "../images/dollhouseHeart.jpeg";
import DollhousePig from "../images/dollhousePig.png";
import DollhouseTable from "../images/dollhouseTable.png";

//Import components
import Header from "../components/Header";
import Project from "../components/Project";

//Image Arrays
const alertifyImages = [Alertify, AlertifyLogin, AlertifySignIn, AlertifySignUp, AlertifyTracker];
const dollhouseImages = [Dollhouse, DollhouseDark, DollhouseBack, DollhouseDesert, DollhouseHeart, DollhousePig, DollhouseTable];

function Home() {
  useEffect(() => {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems);
    M.AutoInit();
  })

  const composeEmail = () => {
    window.open(`mailto:tiana.husted@gmail.com`);
  };
    
  return (
    <div>
      <Header title="TIANA HUSTED" subtitle="FULL STACK WEB DEVELOPER • TECH-BASED ARTIST"/>
      <br/>

      <div id="index-banner" className="parallax-container">
        <div className="parallax"><img src={Dollhouse1} alt="Unsplashed background img 1"/></div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send brown-text"></i></h3>
              <h4>ABOUT</h4>
              <div className="row">
                <div className="col s12 m8 l8">
                  <p className="left-align light">Web developer with a background in tech-based art and a passion for learning new technologies. Certificate from University of Oregon Coding Bootcamp in Full Stack Web Development with newly acquired skills in HTML5, CSS3,
                  JavaScript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS. Extensive experience with custom interface design for interactive art installations, utilizing microprocessors and sensors. Through the creation of immersive art environments, I have developed a keen sense for anticipating different ways a user might interact with various interfaces. I am committed to approaching any project with innovation and creativity.</p>
                  <p className="left-align light">I am currently open to work and am always interested in collaborating with other coders and artists, so please don't hesitate to reach out to me at <a style={{padding:0}} href="." onClick={composeEmail}>tiana.husted@gmail.com</a>.</p>
                </div>
                <div className="col s12 m4 l4">
                  <img id="me" src={Me} alt="me"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container valign-wrapper">
        <div className="parallax"><img src={Dollhouse2} alt="Unsplashed background img 2"/></div>
      </div>

      <div className="container">
        <div className="section">
          <Header title="FEATURED PROJECTS"/>
          <br/>
          
          <div className="row">
            <Project href="#modal1" id="modal1" className="col s12 m6 l6" imgSrc={Alertify}title="Alertify" description="is an application that can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker." modalDescription="Alertify can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker. User will sign up to create an account. Once created, they can login to provide an emergency contact to be alerted if an emergency situation. Within their login, they have a red button to press (Alertify) that sends out a text to their contact with current location to be found with." imageArray={alertifyImages} tech={["HTML", "CSS","JavaScript", "JQuery", "NodeJS", "Sequelize","Passport","BCrypt", "Quick Easy SMS API"]} links={["https://alertifynow.herokuapp.com/", "https://github.com/thusted/Alertify"]}/>

            <Project href="#modal2" id="modal2" className="col s12 m6 l6" imgSrc={DollhouseBack} title="The Dollhouse" description="is a two story, lifesize, interactive house, modeled after a turn of the century Victorian home. Comissioned for and featured at Burning Man 2019." modalDescription="Modeled after a turn of the century Victorian home, The Dollhouse was a piece comissioned for and featured at Burning Man 2019. The back side of the home had the illusion of being completely exposed to open playa, but was enclosed with clear acrylic paneling. This allowed citizens of Black Rock City to see the illuminated structure, and the participants within, from afar. There are two stories, each with two rooms, conventional to the Victorian era: ballroom, kitchen, bathroom, and bedroom. Art pieces in the home include photographs and paintings of a family long past, ghostly porcelain dolls, oddities, remnants of a seance gone wrong, an infinity mirror, and window etchings, all of which react to human touch and/or presence. We hoped to create an ethereal world on playa, captivating and enticing people to play and discover more secrets within." imageArray={dollhouseImages} tech={["Arduino Uno", "Arduino IDE", "MaxMSP", "Kyma", "MadMapper", "Capacitive Touch Sensors","Servo Motors", "GameTrak", "PPG Heart Sensor", "Relay Modules"]} links={["https://www.youtube.com/watch?v=W9TY_xQfr4Y&t=23s", "https://www.youtube.com/watch?v=FfcdDc0tSdU"]}/>
          </div>
        </div>
      </div>

      <div className="parallax-container valign-wrapper">
        <div className="parallax"><img src={Dollhouse3} alt="Unsplashed background img 3"/></div>
      </div>
    </div>
  );
};

export default Home;