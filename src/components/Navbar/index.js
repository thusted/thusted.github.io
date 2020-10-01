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
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/discover"
                className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                Projects
              </Link>
            </li>
            
            {/* Dropdown Trigger */}
            {/* <li><a class="dropdown-trigger" href="#!" data-target="dropdown">Projects<i class="material-icons right">arrow_drop_down</i></a></li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
