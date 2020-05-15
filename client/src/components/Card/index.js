import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleState = (e) => {
    e.preventDefault();
    this.setState({ selected: !this.state.selected });
    let name = this.props.name;
    let selected = !this.state.selected;
    this.props.pushToArray(name, selected);
    // console.log(name, selected);
  };

  render() {
    return (
    <div className="cards">
      <div className="img-container">
      <img
            className="genre"
            onClick={this.toggleState}
            alt={this.props.name}
            src={
              this.state.selected ? this.props.selectedimage : this.props.image
            }
          />
      </div>
      <h3>{this.props.name}</h3>
    </div>
    );
  }
}

export default Card;