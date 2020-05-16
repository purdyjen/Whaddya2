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
      <h4 title={this.props.title}>{this.props.title}</h4>
    <h6>Genres: Action, Science Fiction</h6>
    <h6 vote_average={this.props.vote_average}>Vote Average: {this.props.vote_average}</h6>
    <h6>Overview:</h6>
    <p overview={this.props.overview}>{this.props.overview}</p>
    </div>
    );
  }
}

export default OptionCard;