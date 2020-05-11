import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import Genres from "../components/Genres";
import LogoutBtn from "../components/LogoutBtn";
import style from "./style.css";
class ProfilePage extends Component {
render() {
    return (
      <div>
            <LogoutBtn />
     
            <Genres />
      </div>
    );
  }
}
  export default ProfilePage;