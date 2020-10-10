import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Importing css
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

//Importing components
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

// Importing pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import WebDev from "./pages/WebDev";
import InteractiveArt from "./pages/InteractiveArt";
// import EmployeeDirectory from "./pages/projects/EmployeeDirectory";
// import Alertify from "./pages/projects/Alertify";
// import Burger from "./pages/projects/Burger";
// import JobSearch from "./pages/projects/JobSearch";
// import EmployeeSummary from "./pages/projects/EmployeeSummary";
// import WeatherDashboard from "./pages/projects/WeatherDashboard";
// import Dollhouse from "./pages/projects/Dollhouse";
// import MovingDolls from "./pages/projects/MovingDolls";
// import SonicSteps from "./pages/projects/SonicSteps";
// import Particles from "./pages/projects/Particles";
// import Binaries from "./pages/projects/Binaries";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/webdevelopment" component={WebDev} />
          <Route exact path="/interactiveart" component={InteractiveArt} />
          {/* <Route exact path="/employeedirectory" component={EmployeeDirectory} />
          <Route exact path="/alertify" component={Alertify} />
          <Route exact path="/burger" component={Burger} />
          <Route exact path="/jobsearch" component={JobSearch} />
          <Route exact path="/employeesummary" component={EmployeeSummary} />
          <Route exact path="/weatherdashboard" component={WeatherDashboard} />
          <Route exact path="/dollhouse" component={Dollhouse} />
          <Route exact path="/movingdolls" component={MovingDolls} />
          <Route exact path="/sonicsteps" component={SonicSteps} />
          <Route exact path="/particles" component={Particles} />
          <Route exact path="/binaries" component={Binaries} /> */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
