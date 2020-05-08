import React, { Component } from "react";
import Card from "../Card";
// import Jumbotron from "../Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import cards from "./cards.json";
import style from "./style.css";
class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedgenres: [],
      cards: cards,
    };
    this.pushToArray = this.pushToArray.bind(this);
  }

  pushToArray = (name, selected) => {
    let genres = this.state.selectedgenres;

    //if false(but actually true), check if exists in array
    //if exists, don't push, if doesn't, push
    //if true (but actually false), find and remove from array
    genres.push(name);
    this.setState({ selectedgenres: genres });
    console.log("Selected Genres:" + genres);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h2>What kind of movie are you in the mood for?</h2>
          <div className="genre-container">
            {this.state.cards.map((card) => {
              return (
                <Card
                  onClick={this.toggleState}
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  image={card.image}
                  selected={card.selected}
                  selectedimage={card.selectedimage}
                  pushToArray={this.pushToArray}
                />
              );
            })}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Genres;
