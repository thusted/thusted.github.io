import React, { Component } from "react";

//Importing components
import Header from "../../components/Header";

class Alertify extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <Header title="ALERTIFY" subtitle="AN APPLICATION THAT CAN PROVIDE USERS WITH ADDITIONALL SECURITY IN CASE OF AN EMERGENCY"/>
        </div>
      </div>
      
    );
  }
}

export default Alertify;
