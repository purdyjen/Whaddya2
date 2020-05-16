import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Options from "../components/Options";

class OptionsPage extends Component {
  

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          
            <Options />
           
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OptionsPage;
