import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import AuthCard from "../components/AuthCard";
import Header from "../components/Header";

class Login extends Component {
render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Header />
        <AuthCard />
          </Col>
        </Row>
      </Container>
    );
  }
}
  export default Login;