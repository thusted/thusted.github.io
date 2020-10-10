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
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
