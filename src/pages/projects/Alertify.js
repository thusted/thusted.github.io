import React, { Component } from "react";
import M from "materialize-css";

//Importing images
import AlertifyImg from "../../images/alertify.png";
import AlertifyLogin from "../../images/alertifyLogin.png";
import AlertifySignIn from "../../images/alertifySignIn.png";
import AlertifySignUp from "../../images/alertifySignUp.png";
import AlertifyTracker from "../../images/alertifyTracker.png";

//Importing components
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

//Array of images
//const alertifyImages = [{AlertifyImg}, {AlertifySignUp}, {AlertifyTracker}];

class Alertify extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <Header title="ALERTIFY" subtitle="AN APPLICATION THAT CAN PROVIDE USERS WITH ADDITIONALL SECURITY IN CASE OF AN EMERGENCY"/>
          <Carousel imageSrc={AlertifyImg}/>
        </div>
      </div>
      
    );
  }
}

export default Alertify;
