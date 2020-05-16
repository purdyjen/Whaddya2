import React, { Component } from "react";
import "./style.css";

class OptionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleState = (e) => {
    e.preventDefault();
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
    <div className="options">
      <div className="img-container">
      <img
            onClick={this.toggleState}
            alt={this.props.title}
            src={this.props.image}
          />
      </div>
      <h3>{this.props.title}</h3>
    <h4>Action, Science Fiction</h4>
    <h5>{this.props.vote_average}</h5>
    <p>{this.props.overview}</p>
    </div>
    );
  }
}

export default OptionCard;