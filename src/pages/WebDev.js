import React, { Component } from "react";

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
            <div class="row">
              <div class="col s12">
                <div class="card">
                  <div class="card-image">
                    <img src="assets/images/alertify.png" alt="alertify"/>
                  </div>
                  <div class="card-content">
                    <p><b>Alertify</b> is an application that can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker.</p>
                  </div>
                  <div class="card-action">
                    <a href="assets/projects/alertify.html">VIEW PROJECT</a>
                  </div>
                </div>
              </div>
            </div>
            <br/>
          
            <div class="row">
              <div class="col s12">
                <div class="card">
                  <div class="card-image">
                    <img src="assets/images/burgerApp.png" alt="burger"/>
                  </div>
                  <div class="card-content">
                    <p><b>Burgers!</b> is an application allows users to log burgers with MySQL, Node, Express, Handlebars, and a homemade ORM.</p>
                  </div>
                  <div class="card-action">
                    <a href="assets/projects/burger.html">VIEW PROJECT</a>
                  </div>
                </div>
              </div>
            </div>
            <br/>
          
            <div class="row">
              <div class="col s12">
                <div class="card">
                  <div class="card-image">
                    <img src="assets/images/jobSearch.png" alt="jobSearch"/>
                  </div>
                  <div class="card-content">
                    <p><b>Software Developers Job Search</b> is an application designed for developers out of school who are looking for jobs.</p>
                  </div>
                  <div class="card-action">
                    <a href="assets/projects/jobSearch.html">VIEW PROJECT</a>
                  </div>
                </div>
              </div>
            </div>
            <br/>
          
            <div class="row">
              <div class="col s12">
                <div class="card">
                  <div class="card-image">
                    <img src="assets/images/employeeSummary.png" alt="employeeSummary"/>
                  </div>
                  <div class="card-content">
                    <p><b>Employee Summary</b> is a command-line application that generates an HTML file that displays information on an engineeering team based on user input.</p>
                  </div>
                  <div class="card-action">
                    <a href="assets/projects/employeeSummary.html">VIEW PROJECT</a>
                  </div>
                </div>
              </div>
            </div>
            <br/>
          
            <div class="row">
              <div class="col s12">
                <div class="card">
                  <div class="card-image">
                    <img src="assets/images/readmeGen.png" alt="readmeGen"/>
                  </div>
                  <div class="card-content">
                    <p><b>README Generator</b> is a command-line application that dynamically generates a professional README.md from a user's input.</p>
                  </div>
                  <div class="card-action">
                    <a href="assets/projects/readmeGen.html">VIEW PROJECT</a>
                  </div>
                </div>
              </div>
            </div>
            <br/>
          
            <div class="row">
              <div class="col s12">
                <div class="card">
                  <div class="card-image">
                    <img src="assets/images/weatherDashboard.png" alt="weatherDashboard"/>
                  </div>
                  <div class="card-content">
                    <p><b>Weather Dashboard</b> is an application designed to show the weather outlook for any given city. When a user searches for a city, they are presented with current and future conditions for that city and that city is added to the search history.</p>
                  </div>
                  <div class="card-action">
                    <a href="./assets/projects/weatherDashboard.html">VIEW PROJECT</a>
                  </div>
                </div>
              </div>
            </div>
            <br/>
          
            <div class="row">
              <div class="col s12">
                <div class="card">
                  <div class="card-image">
                    <img src="assets/images/codeQuiz.png" alt="codeQuiz"/>
                  </div>
                  <div class="card-content">
                    <p><b>Code Quiz</b> is an application created to run an interactive timed quiz with Javascript fundamental questions.</p>
                  </div>
                  <div class="card-action">
                    <a href="./assets/projects/codeQuiz.html">VIEW PROJECT</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebDev;
