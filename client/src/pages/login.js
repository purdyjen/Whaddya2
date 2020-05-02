import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
// import API from "../utils/;
import AuthCard from "../components/AuthCard";
import Header from "../components/Header";

function Login() {
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

  export default Login;