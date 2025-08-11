import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Importing css
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

//Importing components
import Navbar from "./components/Navbar";

// Importing pages
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";
// import WebDesign from "./pages/WebDesign";
import InteractiveArt from "./pages/InteractiveArt";
import Processing from "./pages/Processing";

function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/webdevelopment" component={WebDev} />
          {/* <Route exact path="/webdesign" component={WebDesign} /> * */}
          <Route exact path="/interactiveart" component={InteractiveArt} />
          <Route exact path="/processing" component={Processing} />

        </Router>
      </div>
    
  );
}

export default App;
