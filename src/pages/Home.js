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

//Import components
import MainHeader from "../components/MainHeader";
import Header from "../components/Header";
import Project from "../components/Project";

//Image Arrays
const alertifyImages = [Alertify, AlertifyLogin, AlertifySignIn, AlertifySignUp, AlertifyTracker];
const dollhouseImages = [Dollhouse, DollhouseBack2, DollhouseDark, DollhouseBack, DollhouseDesert, DollhouseHeart, DollhousePig, DollhouseTable];
const bezierImages = [House, Senate];

function Home() {
  useEffect(() => {
    const elems = document.querySelectorAll('.slider');
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

      <div className="container">
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
                          <button id="sendBtn" className="btn waves-effect" type="submit" name="action" onClick={composeEmail}>
                            <i className="material-icons">send</i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m8 l8">
                    <div className="pagesContainer">
                      <div className="col s4 m4 l4">
                        <a href="https://github.com/thusted">
                          <img className="hoverable" id="github" src={Github} alt="githubImg"/>
                        </a>
                      </div>

                      <div className="col s4 m4 l4">
                        <a href="https://www.linkedin.com/in/tiana-husted-395057163/">
                          <img className="hoverable" id="linkedin" src={Linkedin} alt="linkedImg"/>
                        </a>
                      </div>

                      <div className="col s4 m4 l4">
                        <a href={Resume}>
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
        <div className="container">
          
            <Header title="FEATURED PROJECTS" subtitle="PAST WORK"/>
            <br/>
            
            <div className="row">
              <div id="alertifyProject" className="col s12 m4 l4">
                <Project href="#modal1" id="modal1" imgSrc={Alertify}title="ALERTIFY" modalDescription="Alertify can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker. User will sign up to create an account. Once created, they can login to provide an emergency contact to be alerted if an emergency situation. Within their login, they have a red button to press (Alertify) that sends out a text to their contact with current location to be found with." imageArray={alertifyImages} tech={["HTML", "CSS","JavaScript", "JQuery", "NodeJS", "Sequelize","Passport","BCrypt", "Quick Easy SMS API"]} links={["https://alertifynow.herokuapp.com/", "https://github.com/thusted/Alertify"]}/>

                <button className="btn-large hoverable">
                  <Link
                    id="alertifyProject"
                    style={{color:"white"}} 
                    to="/webdevelopment"
                    className={window.location.pathname === "/webdevelopment" ? "nav-link active" : "nav-link"}
                  >
                    ALL WEB DEVELOPEMENT
                  </Link>
                </button>
              </div>

              <div id="dollhouseProject" className="col s12 m4 l4">
                <Project href="#modal2" id="modal2" imgSrc={DollhouseBack2} title="THE DOLLHOUSE" modalDescription="Modeled after a turn of the century Victorian home, The Dollhouse was a piece comissioned for and featured at Burning Man 2019. The back side of the home had the illusion of being completely exposed to open playa, but was enclosed with clear acrylic paneling. This allowed citizens of Black Rock City to see the illuminated structure, and the participants within, from afar. There are two stories, each with two rooms, conventional to the Victorian era: ballroom, kitchen, bathroom, and bedroom. Art pieces in the home include photographs and paintings of a family long past, ghostly porcelain dolls, oddities, remnants of a seance gone wrong, an infinity mirror, and window etchings, all of which react to human touch and/or presence. We hoped to create an ethereal world on playa, captivating and enticing people to play and discover more secrets within." imageArray={dollhouseImages} tech={["Arduino Uno", "Arduino IDE", "MaxMSP", "Kyma", "MadMapper", "Capacitive Touch Sensors","Servo Motors", "GameTrak", "PPG Heart Sensor", "Relay Modules"]} links={["https://www.youtube.com/watch?v=W9TY_xQfr4Y&t=23s", "https://www.youtube.com/watch?v=FfcdDc0tSdU"]}/>

                
                <Link
                  id="dollhouseProject"
                  style={{color:"white"}} 
                  to="/interactiveart"
                  className={window.location.pathname === "/interactiveart" ? "nav-link active" : "nav-link"}
                >
                  <button className="btn-large hoverable">ALL INTERACTIVE ART</button>
                </Link>
              </div>

              <div id="bezierProject" className="col s12 m4 l4">
                <Project href="#modal3" id="modal3" imgSrc={House} title="BEZIER DATA VISUALIZATION" modalDescription="Bezier Data Visualization uses bezier curves to plot data, using government CSV files from 2017. This sketch allows users to see a visual representation of how often (on a scale of percentage) the members of the Senate and House vote in line with Trump’s position."  imageArray={bezierImages} tech={["Processing"]} links={["https://github.com/thusted/Bezier-Data-Visualization", "https://youtu.be/Pd81FM694fs"]}/>

                
                <Link
                  id="bezierProject"
                  style={{color:"white"}} 
                  to="/processing"
                  className={window.location.pathname === "/processing" ? "nav-link active" : "nav-link"}
                >
                  <button className="btn-large hoverable">ALL PROCESSING(JAVA)</button>
                </Link>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;