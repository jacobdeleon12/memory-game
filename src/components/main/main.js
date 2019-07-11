import React, { Component } from "react";
import "./style.css";
import Data from "../imgdata/img.json";
import Nav from "..//nav/nav.js";
import Header from "../Hero/Hero.js";
import Alert from "../alert/alert.js";
import Card from "../Card/Card.js";

// console.log(Data);


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
    alert: ["danger", "success"],
    message: "",
    loss: false,
    shake: ""
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
    if (this.state.loss) {
      let reset = this.state.loss;
      reset = false;
      this.setState({ loss: reset });
      let shakePlacement = this.state.shake;
      shakePlacement = "";
      this.setState({ shake: shakePlacement });
    }
  };

  handleLoss = () => {
    console.log("here at the loss");
    // eslint-disable-next-line
    const newList = this.state.Data.map(item => {
      if (item.clicked) {
        item.clicked = false;
        this.setState({ clicked: item.clicked, score: 0 });
        // console.log(this.state);
      }
      return item;
    });
    let type = this.state.loss;
    type = true;
    this.setState({ loss: type });
    console.log(this.state);
    let alertValue = this.state.alert;
    alertValue = "danger";
    this.setState({ alert: alertValue });
    console.log(this.state);
    this.Alert(type);
  };

  Alert = type => {
    console.log(this.state);
    if (type) {
      let lossMessage = this.state.message;
      lossMessage = "Aww Good Try";
      this.setState({ message: lossMessage });
      let shakePlacement = this.state.shake;
      shakePlacement = "shake";
      this.setState({ shake: shakePlacement });
    } else {
      let reset = this.state.loss;
      reset = true;
      this.setState({ loss: reset });

      this.setState({ alert: "success" });
      let lossMessage = this.state.message;
      lossMessage = "You won";
      this.setState({ message: lossMessage });
    }
  };
  handleIncrement = () => {
    // console.log("what are you doing ");
    let newScore = this.state.score;
    newScore++;
    this.setState({ score: newScore });
    let newTopScore = this.state.topScore;
    console.log(newTopScore);
    if (newTopScore === 11) {
      console.log("did i make it here");
      this.Alert(false);
    } else if (newTopScore <= newScore) {
      newTopScore = newScore;
      // console.log(newTopScore);
      this.setState({ topScore: newTopScore });
    }
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <div className="container">
          <Alert
            style={{ "textAlign": "center", opacity: this.state.loss ? 1 : 0 }}
            type={this.state.alert}
          >
            {this.state.message}
          </Alert>
          {this.state.Data.map(item => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              handleClick={this.handleClick}
              clicked={item.clicked}
              shake={this.state.shake}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
