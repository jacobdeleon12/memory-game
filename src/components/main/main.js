import React , { Component } from "react";

import "./style.css";
import Data from "../imgdata/img.json"

console.log(Data.img);
console.log(Data.id);
console.log(Data);


// const mappingFunction = Data => Data.img;

// const img = Data.map(mappingFunction);

class Main extends Component {
  state = {
  friendData: Data
  };



render(){
  return(
 <div >
 <img alt = "" scr = {this.state.friendData}/>

 </div>
  )
}

}

export default Main;

