import React, { Component } from "react";

// Importing images
import Alertify from "../images/alertify.png";
import Burger from "../images/burgerApp.png";
import JobSearch from "../images/jobSearch.png";
import EmployeeSummary from "../images/employeeSummary.png";
import WeatherDashboard from "../images/weatherDashboard.png";
import CodeQuiz from "../images/codeQuiz.png";

// Importing components
import Project from "../components/Project";

class WebDev extends Component {
  render() {
    return (
      <div>
        <div id="name-container">
          <h4>WEB DEVELOPMENT</h4>
          <h6>PAST PROJECTS</h6>
        </div>
        <br/><br/>

        <div class="container">
          <div class="section">
            <Project className="col s12" imgSrc={Alertify} title="Alertify" description="is an application that can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker." link="/alertify"/>
            <br/>

            <Project className="col s12" imgSrc={Burger} title="Burgers!" description="is an application allows users to log burgers with MySQL, Node, Express, Handlebars, and a homemade ORM." link="/burger"/>
            <br/>
            
            <Project className="col s12" imgSrc={JobSearch} title="Software Developers Job Search" description="is an application designed for developers out of school who are looking for jobs." link="/jobsearch"/>
            <br/>

            <Project className="col s12" imgSrc={EmployeeSummary} title="Employee Summary" description="is a command-line application that generates an HTML file that displays information on an engineeering team based on user input." link="/employeesummary" />
            <br/>

            <Project className="col s12" imgSrc={WeatherDashboard} title="Weather Dashboard" description="is an application designed to show the weather outlook for any given city. When a user searches for a city, they are presented with current and future conditions for that city and that city is added to the search history." link="/weatherdashboard"/>
            <br/>

            <Project className="col s12" imgSrc={CodeQuiz} title="Code Quiz" description="is an application created to run an interactive timed quiz with Javascript fundamental questions." link="/codequiz"/>
          </div>
        </div>
      </div>
    );
  }
}

export default WebDev;
