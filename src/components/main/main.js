import React, { Component } from "react";
// import Img from "../img/dbz.gif";
import "./style.css";
import Data from "../imgdata/img.json";
import Nav from "..//nav/nav.js";
import Header from "../Hero/Hero.js";
import Alert from "../alert/alert.js";
import Card from "../Card/Card.js";

console.log(Data);
// console.log(Img);

const shuffleArr = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class Main extends Component {
  state = {
    Data,
    score: 0,
    topScore: 0,
    win: "",
    loss: "",
    
  };

  shuffleData = () => {
    let shuffled = shuffleArr(Data);
    this.setState({ Data: shuffled });
  };

  componentDidMount() {
    this.shuffleData();
  }

  handleClick = id => {
    // console.log(id);

    let clickedGuess = false;

    const newList = this.state.Data.map(item => {
      // console.log(item.clickedGuess);

      if (item.id === id) {
        // console.log(item);

        if (!item.clicked) {
          clickedGuess = true;
          item.clicked = true;
          // console.log(item);
        }
      }
      return item;
    });
    // console.log(clickedGuess);
    clickedGuess ? this.handleIncrement(newList) : this.handleLoss(newList);

    this.shuffleData();
  };

  handleLoss = () => {
    console.log("here at the loss");
    // eslint-disable-next-line
    const newList = this.state.Data.map(item => {
      if (item.clicked) {
        item.clicked = false;
        this.setState({ clicked: item.clicked, score: 0 });
        console.log(this.state);
      }
      return item;
    });
    this.shuffleData();
  };

  handleIncrement = () => {
    // console.log("what are you doing ");

    let newScore = this.state.score;
    newScore++;
    this.setState({ score: newScore });

    let newTopScore = this.state.topScore;

    if (newTopScore <= newScore) {
      newTopScore = newScore;
      // console.log(newTopScore);

      this.setState({ topScore: newTopScore });
    } else if (newTopScore === 12) {
      //alert you won
    }
  };

  Alert = () => {
    let lossMessage = this.state.loss;
    lossMessage = "You Lost HAHA";
    this.setState({ loss: lossMessage });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <div className="container">
          <Alert alert={this.state.loss} style={{ opacity: 1 }} type="danger" />
          {this.state.Data.map(item => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              handleClick={this.handleClick}
              clicked={item.clicked}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
