import React, { Component } from "react";
import Card from "../Card";
// import Jumbotron from "../Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.toggleState = this.toggleState.bind(this);
  }
  
  toggleState = id => {
    if (this.state.selected === false) {
      this.setState(state => ({
        selected: state.true
      }));
      this.clickedCard(id);
    } else {
      this.setState(state => ({
        selected: state.false
      }));
      this.clickedCard(id);
    }
  }

  clickedCard = id => {
    let clickedCards = [];
    this.clickedCard = this.clickedCard.bind(this);

    if (this.state.selected === false) { 
      return this.props.image 
    }
    else { 
      clickedCards.push(this.props.id);
      return this.props.selectedimage
    }
  }


  // componentDidMount() {
  //   this.loadGenres();
  // }

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.true) {
  //     API.sendGenres({
  //       genre: this.state.name
  //     })
  //       .then(res => this.loadGenres())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

              <h1>What kind of movie are you in the mood for?</h1>
          
            {this.state.cards.map(card => (
              <Card
                onClick={this.toggleState}
                key={card.id}
                id={card.id}
                name={card.name}
                image={this.image}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Genres;
