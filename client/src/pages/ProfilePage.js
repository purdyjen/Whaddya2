import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import Genres from "../components/Genres";

class ProfilePage extends Component {
render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            
              <h1>Profile</h1>
          
              <Genres />
          </Col>
        </Row>
      </Container>
    );
  }
}
  export default ProfilePage;