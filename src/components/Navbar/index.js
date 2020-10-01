import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import M from "materialize-css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <nav class="white">
        <div class="nav-wrapper" id="nav-web">
          <ul class="right">
          <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
              >
                Projects
              </Link>
            </li>
            
            {/* Dropdown Trigger */}
            {/* <li>
              <a class="dropdown-trigger" href="#!" data-target="dropdown">Projects<i class="material-icons right">arrow_drop_down</i></a>
              <ul id="dropdown1" class="dropdown-content">
                <li><a href="webDev.html">Web Development</a></li>
                <li><a href="interactiveArt.html">Interactive Art</a></li>
              </ul>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
