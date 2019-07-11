import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="nav-item">
        <li>Memory Game</li>
        <li>{props.guessCorrect}</li>
        <li>Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
