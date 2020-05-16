import React, { Component } from "react";
import OptionCard from "../OptionCard";
import options from "./options.json";

class Options extends Component {
constructor(props) {
    super(props);
    this.state = {
         selected: false,
         options: options
    };
}

render() {
    return (
      <div className="options-container">
            <h2>Movie Options</h2>
            {this.state.options.map((option) => {
              return (
                <OptionCard
                  key={option.id}
                  onClick={this.toggleState}
                  className={this.state.selected}
                  selected={option.selected}
                  title={option.title}
                  image={option.image}
                  vote_average={option.vote_average}
                  overview={option.overview}
                 />
              );
            })}

            </div>
    );

  }
}

export default Options;
