import React, { Component } from "react";
import M from "materialize-css";

// Importing images
import Alertify from "../images/alertify.png";
import AlertifyLogin from "../images/alertifyLogin.png";
import AlertifySignIn from "../images/alertifySignIn.png";
import AlertifySignUp from "../images/alertifySignUp.png";
import AlertifyTracker from "../images/alertifyTracker.png";
import Burger from "../images/burgerApp.png";
import JobSearch from "../images/jobSearch.png";
import JobSearchContact from "../images/jobSearchContact.png";
import JobSearchHome from "../images/jobSearchHome.png";
import EmployeeSummary from "../images/employeeSummary.png";
import WeatherDashboard from "../images/weatherDashboard.png";
import EmployeeDirectory from "../images/employeeDirectory.png";

// Importing components
import Project from "../components/Project";
import Header from "../components/Header";

class WebDev extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems);
    M.AutoInit();
  }

  render() {
    const alertifyImages = [Alertify, AlertifyLogin, AlertifySignIn, AlertifySignUp, AlertifyTracker];

    const jobSearchImages = [JobSearch, JobSearchContact, JobSearchHome];

    return (
      <div>
        <Header title="WEB DEVELOPMENT" subtitle="PAST PROJECTS"/>
        <br/>

        <div class="container">
          <div class="section">
            <Project href="#modal3" id="modal3" className="col s12" imgSrc={EmployeeDirectory} title="Employee Directory" description="is an application that creates a directory of employees with React." link="/employeedirectory" modalDescription="Employee Directory creates an employee directory with React. Users are able to filter employees by typing in names as well as sort employees alphabetically by name, country, or email." imageArray={[EmployeeDirectory]} tech={["React, JavaScript", "HTML", "CSS"]} links={["https://ancient-thicket-95619.herokuapp.com/", "https://github.com/thusted/Employee_Directory"]}/>
            <br/>

            <Project href="#modal4" id="modal4" className="col s12" imgSrc={Alertify}title="Alertify" description="is an application that can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker." modalDescription="Alertify can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker. User will sign up to create an account. Once created, they can login to provide an emergency contact to be alerted if an emergency situation. Within their login, they have a red button to press (Alertify) that sends out a text to their contact with current location to be found with." imageArray={alertifyImages} tech={["HTML", "CSS","JavaScript", "JQuery", "NodeJS", "Sequelize","Passport","BCrypt", "Quick Easy SMS API"]} links={["https://alertifynow.herokuapp.com/", "https://github.com/thusted/Alertify"]}/>

            <Project href="#modal5" id="modal5" className="col s12" imgSrc={Burger} title="Burgers!" description="is an application allows users to log burgers with MySQL, Node, Express, Handlebars, and a homemade ORM." modalDescription="Burgers! allows users to log burgers with MySQL, Node, Express, Handlebars, and a homemade ORM. It follows the MVC design pattern, utilizing Node and MySQL to query and route data in the application, and Handlebars to generate the HTML." imageArray={[Burger]} tech={["HTML", "CSS", "JavaScript", "Node", "Express","Handlebars"]} links={["https://calm-atoll-81003.herokuapp.com/", "https://github.com/thusted/burger"]}/>
            <br/>
            
            <Project href="#modal6" id="modal6" className="col s12" imgSrc={JobSearch} title="Software Developers Job Search" description="is an application designed for developers out of school who are looking for jobs." modalDescription="The Software Developers Job Search application was designed for developers out of school who are looking for jobs. In addition to job listings, the application also provides news articles about the company so developers can make a more informed decision about where they work." imageArray={jobSearchImages} tech={["HTML", "CSS","JavaScript", "GitHub Jobs API", "GNews API", "Zip Code API", "Fomantic UI", "Lodash", "JQuery"]} links={["https://thusted.github.io/P1_JobSearch/", "https://github.com/thusted/P1_JobSearch"]}/>
            <br/>

            <Project href="#modal7" id="modal7" className="col s12" imgSrc={EmployeeSummary} title="Employee Summary" description="is a command-line application that generates an HTML file that displays information on an engineeering team based on user input." link="/employeesummary" modalDescription="This is a command-line application that generates an HTML file that displays information on an engineeering team based on user input. This application uses the Inquirer package to prompt the user to fill out information regarding their engineering team. It will first prompt the user to enter information regarding the team's manager (the user) and then will give the user the opportunity to add engineers and interns to the team." imageArray={[EmployeeSummary]} tech={["JavaScript", "NodeJS"]} links={["https://github.com/thusted/TemplateEngine_EmployeeSummary", "https://www.youtube.com/watch?v=Sq2YE3__nfI&feature=youtu.be"]}/>
            <br/>

            <Project className="col s12" imgSrc={WeatherDashboard} title="Weather Dashboard" description="is an application designed to show the weather outlook for any given city. When a user searches for a city, they are presented with current and future conditions for that city and that city is added to the search history." link="/weatherdashboard"/>
          </div>
        </div>
      </div>
    );
  }
}

export default WebDev;
