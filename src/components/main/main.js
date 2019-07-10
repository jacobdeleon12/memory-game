import React, { Component } from "react";
import Img from "../img/dbz.gif";
import "./style.css";
import Data from "../imgdata/img.json";
import Nav from "..//nav/nav.js";
import Header from "../Hero/Hero.js";
import Alert from "../alert/alert.js";
import Card from "../Card/Card.js";

console.log(Data);
console.log(Img);

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
    Clicked: false
  };

  shuffleData = () => {
    let shuffled = shuffleArr(Data);
    this.setState({ Data: shuffled });
  };

  componentDidMount() {
    this.shuffleData();
  }

  handleClick = id => {
    console.log(id);

    let clickedGuess = false;
    
    const newList = this.state.Data.map(item => {
      // console.log(item.clickedGuess);
      
      if (item.id === id) {
        console.log(item);
        
        if (!item.clickedGuess) {
          
          clickedGuess = true;
          // this.setState({clicked: clickedGuess})
          console.log(item);
          
        }
      }
      return item;
    });
    console.log(clickedGuess);
    (clickedGuess) ?  
    this.handleIncrement(newList) 
    :  
    console.log("here we are ");
     
    
    
  };

  handleIncrement = () => {

    let newScore = this.state.score;
    newScore++;
    this.setState({score: newScore});

    
    
  };

  // };

  render() {
    return (
      <div>
        <Nav score={this.state.score} />
        <Header />
        <div className="container">
          <Alert />

          {this.state.Data.map(item => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              handleClick={this.handleClick}
              clicked={this.clicked}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
