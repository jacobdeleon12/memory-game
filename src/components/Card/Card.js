import React from "react";
import "./style.css";

const Card = props => (
  <div
    className={`card ${props.shake}`}
    id={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <img alt={props.name} src={props.image} />
  </div>
);

export default Card;
