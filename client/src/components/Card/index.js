import React from "react";
import "./style.css";

const Card = props => (

    <div className="card" onClick={() => props.clickedCard(props.id)}>
      <div className="img-container">
        <img className="default" src={props.image} alt={props.name} />
        <img className="selected" src={props.selectedimage} alt={props.name} />
      </div>
    </div>
  );


export default Card;