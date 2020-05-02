import React, { Component } from "react";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Genres extends Component {
  state = {
    selected: false
  };

  componentDidMount() {
    this.loadGenres();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.true) {
      API.sendGenres({
        genre: this.state.name
      })
        .then(res => this.loadGenres())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What kind of movie are you in the mood for?</h1>
            </Jumbotron>
            <Card>
              
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
