import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

//Import css
import "./pageStyle.css";

//Import images
import BlinkBackground from "../images/blinkBackground1.jpg";
import BlinkBackground2 from "../images/blinkBackground2.jpg";
import Me from "../images/me.png";
import Alertify from "../images/alertify.jpeg";
import AlertifyLogin from "../images/alertifyLogin.jpeg";
import AlertifySignIn from "../images/alertifySignIn.jpeg";
import AlertifySignUp from "../images/alertifySignUp.jpeg";
import AlertifyTracker from "../images/alertifyTracker.jpeg";
import DollhouseBack from "../images/dollhouseBack.jpeg";
import DollhouseBack2 from "../images/dollhouseBack2.jpeg";
import Dollhouse from "../images/dollhouse.jpeg";
import DollhouseDark from "../images/dollhouseDark.jpeg";
import DollhouseDesert from "../images/dollhouseDesert.jpeg";
import DollhouseHeart from "../images/dollhouseHeart.jpeg";
import DollhousePig from "../images/dollhousePig.jpeg";
import DollhouseTable from "../images/dollhouseTable.jpeg";
import House from "../images/bezierDataVisHouse.jpeg";
import Senate from "../images/bezierDataVisSenate.jpeg";
import Github from "../images/github.png";
import Linkedin from "..//images/linkedin.png";
import ResumeIcon from "../images/resumeIcon.png";
import Resume from "../images/webdevResume.pdf";
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

//Import components
import MainHeader from "../components/MainHeader";
import Header from "../components/Header";
import Project from "../components/Project";

//Image Arrays
const alertifyImages = [Alertify, AlertifyLogin, AlertifySignIn, AlertifySignUp, AlertifyTracker];
const dollhouseImages = [Dollhouse, DollhouseBack2, DollhouseDark, DollhouseBack, DollhouseDesert, DollhouseHeart, DollhousePig, DollhouseTable];
const bezierImages = [House, Senate];
const ahfemmeImages = [Ahfemme1, Ahfemme2, Ahfemme3, Ahfemme4, Ahfemme5, Ahfemme6, Ahfemme7, Ahfemme8, Ahfemme9, Ahfemme10, Ahfemme11, Ahfemme12, Ahfemme13];

function Home() {
  useEffect(() => {
    const elems = document.querySelectorAll('.slider');
    const navElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(navElems);
    M.Slider.init(elems);
    M.AutoInit();
  })

  const composeEmail = (e) => {
    e.preventDefault();
    const body = document.getElementById("msgInput").value;
    window.open(`mailto:tiana.husted@gmail.com?body=${body}`);
  };
    
  return (
    <div>
      <div id="index-banner" className="parallax-container">
        <div className="parallax"><img src={BlinkBackground} alt="Unsplashed background img 1"/>
        </div>
        <MainHeader title="TIANA HO'OLANA HUSTED" subtitle="WEB AND SOFTWARE DEVELOPER • TECH-BASED ARTIST"/>
      </div>

      <div className="aboutSection">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send brown-text"></i></h3>
              <h4 id="aboutMe"><b>ABOUT</b></h4>
              <div className="row">
                <div className="col s12 m8 l8">
                  <p className="left-align light">Web developer with a background in tech-based art and a passion for learning new technologies. Certificate from University of Oregon Coding Bootcamp in Full Stack Web Development with newly acquired skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS. Extensive experience with custom interface design for interactive art installations, utilizing microprocessors and sensors. Through the creation of immersive art environments, I have developed a keen sense for anticipating different ways users interact with various interfaces. I integrate that knowledge into my work and am committed to approaching any project with innovation and creativity.</p>

                  <p className="left-align light">I am currently open to work and am always interested in collaborating with other coders and artists, so please don't hesitate to reach out to me at <a style={{padding:0}} href="." onClick={composeEmail}>tiana.husted@gmail.com</a>.</p>
                  
                  <br/>

                  <div className="row">
                    <div className="col s12 m12 l12">
                      <div className="card body" id="contactCard">
                        <form id="mail">
                          <div className="form-group">
                            <label for="msgInput">Don't Be Shy, Say Hi! Fill out the text box below to send me an email.</label>
                            <textarea type="text" class="form-control" id="msgInput" rows="5"></textarea>
                          </div>
                          <br/>
                          <button id="sendBtn" className="btn waves-effect hoverable" type="submit" name="action" onClick={composeEmail}>
                            <i className="material-icons">send</i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m8 l8">
                    <div className="pagesContainer">
                      <div className="col s4 m4 l4">
                        <a href="https://github.com/thusted" target="_blank" rel="noreferrer noopener">
                          <img className="hoverable" id="github" src={Github} alt="githubImg"/>
                        </a>
                      </div>

                      <div className="col s4 m4 l4">
                        <a href="https://www.linkedin.com/in/tiana-husted-395057163/" target="_blank" rel="noreferrer noopener">
                          <img className="hoverable" id="linkedin" src={Linkedin} alt="linkedImg"/>
                        </a>
                      </div>

                      <div className="col s4 m4 l4">
                        <a href={Resume} target="_blank" rel="noreferrer noopener">
                          <img className="hoverable" id="resume" src={ResumeIcon} alt="resumeImg"/>
                        </a>
                      </div>
                    </div>
                  </div>
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
        <div className="parallax"><img src={BlinkBackground2} alt="Unsplashed background img 2"/></div>
        <div className="projectSection">
            <Header title="FEATURED PROJECTS" subtitle="PAST WORK" id="featuredProjectsTitle"/>
            <br/>
            
            <div className="row">
              <div id="alertifyProjectContainer" className="col s12 m6 l6">
                <Project href="#modal1" id="modal1" imgSrc={Alertify}title="ALERTIFY" modalDescription="Alertify can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker. User will sign up to create an account. Once created, they can login to provide an emergency contact to be alerted if an emergency situation. Within their login, they have a red button to press (Alertify) that sends out a text to their contact with current location to be found with." imageArray={alertifyImages} tech={["HTML", "CSS","JavaScript", "JQuery", "NodeJS", "Sequelize","Passport","BCrypt", "Quick Easy SMS API"]} links={["https://alertifynow.herokuapp.com/", "https://github.com/thusted/Alertify"]}/>
                <br/>

                <button className="btn-large hoverable">
                  <Link
                    id="alertifyProject"
                    to="/webdevelopment"
                    className={window.location.pathname === "/webdevelopment" ? "nav-link active" : "nav-link"}
                  >
                    ALL WEB DEVELOPEMENT
                  </Link>
                </button>
                <br/>
              </div>
              <div id="ahfemmeProjectContainer" className="col s12 m6 l6">
                <Project href="#modal20" id="modal20" imgSrc={AhfemmeCover} title="AHFEMME" modalDescription="AHFEMME is a queer art collective, birthed from the cosmos. They use a variety of mediums to produce multi-sensory interactive performances and events. This website was created for the artists to let the people know who they are and what they're doing, as well as donate to current and future projects."  imageArray={ahfemmeImages} tech={["Designed and created with Squarespace"]} links={["https://www.ahfemme.com"]}/>
                <br/>

                <button className="btn-large hoverable">
                  <Link
                    id="allWebDesignBtn"
                    to="/webdesign"
                    className={window.location.pathname === "/webdesign" ? "nav-link active" : "nav-link"}
                  >
                    ALL WEB DESIGN
                  </Link>
                </button>
                <br/>
              </div>
            </div>
            <div className="row">
              <div id="dollhouseProjectContainer" className="col s12 m6 l6">
                <Project href="#modal2" id="modal2" imgSrc={DollhouseBack2} title="THE DOLLHOUSE" modalDescription="Modeled after a turn of the century Victorian home, The Dollhouse was a piece comissioned for and featured at Burning Man 2019. The back side of the home had the illusion of being completely exposed to open playa, but was enclosed with clear acrylic paneling. This allowed citizens of Black Rock City to see the illuminated structure, and the participants within, from afar. There are two stories, each with two rooms, conventional to the Victorian era: ballroom, kitchen, bathroom, and bedroom. Art pieces in the home include photographs and paintings of a family long past, ghostly porcelain dolls, oddities, remnants of a seance gone wrong, an infinity mirror, and window etchings, all of which react to human touch and/or presence. We hoped to create an ethereal world on playa, captivating and enticing people to play and discover more secrets within." imageArray={dollhouseImages} tech={["Arduino Uno", "Arduino IDE", "MaxMSP", "Kyma", "MadMapper", "Capacitive Touch Sensors","Servo Motors", "GameTrak", "PPG Heart Sensor", "Relay Modules"]} links={["https://www.youtube.com/watch?v=W9TY_xQfr4Y&t=23s", "https://www.youtube.com/watch?v=FfcdDc0tSdU"]}/>
                <br/>

                <button className="btn-large hoverable">
                  <Link
                    id="dollhouseProject"
                    to="/interactiveart"
                    className={window.location.pathname === "/interactiveart" ? "nav-link active" : "nav-link"}
                  >
                    ALL INTERACTIVE ART
                  </Link>
                </button>
                <br/>
              </div>

              <div id="bezierProjectContainer" className="col s12 m6 l6">
                <Project href="#modal3" id="modal3" imgSrc={House} title="BEZIER DATA VISUALIZATION" modalDescription="Bezier Data Visualization uses bezier curves to plot data, using government CSV files from 2017. This sketch allows users to see a visual representation of how often (on a scale of percentage) the members of the Senate and House vote in line with Trump’s position."  imageArray={bezierImages} tech={["Processing"]} links={["https://github.com/thusted/Bezier-Data-Visualization", "https://youtu.be/Pd81FM694fs"]}/>
                <br/>
                
                <button className="btn-large hoverable">
                  <Link
                  id="bezierProject"
                  to="/processing"
                  className={window.location.pathname === "/processing" ? "nav-link active" : "nav-link"}
                  >
                    ALL PROCESSING(JAVA)
                  </Link>
                </button>
              </div>
              <br/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;