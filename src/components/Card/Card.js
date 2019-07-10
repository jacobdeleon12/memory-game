import React from "react";
import "./style.css";

const Card = props => (
  <div 
    className="card" 
    id={props.id} 
    onClick={() => props.handleClick(props.id)}
    clicked = {props.clicked}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;

