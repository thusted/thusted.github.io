import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/WebDev';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
