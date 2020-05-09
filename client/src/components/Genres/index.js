import React, { Component } from "react";
import Card from "../Card";
import { Col, Row, Container } from "../Grid";
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
    let includesName = genres.includes(name);
    console.log("In Array? - " + includesName);
    if (includesName) {
      let i = genres.indexOf(name);
      console.log(i);
      genres.splice(i, 1);
      this.setState({ selectedgenres: genres });
      console.log("Selected Genres:" + genres);
    } else {
      genres.push(name);
      this.setState({ selectedgenres: genres });
      console.log("Selected Genres:" + genres);
    }
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
