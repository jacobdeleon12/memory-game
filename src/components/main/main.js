import React , { Component } from "react";
import Img from "../img/dbz.gif"
import "./style.css";
import Data from "../imgdata/img.json"
import FriendCard from "../Card/friendCard.js"

console.log(Data.img);
console.log(Data.id);
console.log(Data);
console.log(Img);

// function shuffleFriends(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };


class Main extends Component {
  constructor (props) {
    super(props)
  
  this.state = {
  Data
  };

  }

render(){
  return(
 <div className = "container">
   <img alt = "" src ={Img}/>
   {/* <h1>{names}</h1> */}
{this.state.Data.map((item)=>(
  <FriendCard 
  key = {item.id}
  image= {item.image}
  name = {item.name}
  clicked = {item.clicked}
  />
 


))}
 </div>
  )
}

}

export default Main;

