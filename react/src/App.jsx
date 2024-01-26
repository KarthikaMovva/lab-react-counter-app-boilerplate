import { Component } from "react";
import "./App.css"
class counter extends Component{
constructor(){
  super();
  this.state={
    count : 0
  }
}
render(){
  const increasingButton = ()=>{
    let addcount={
      count : this.state.count+1
    }
    this.setState(addcount)
  }

  const decreasingButton = ()=>{
    let subractcount={
      count : this.state.count-1
    }
    this.setState(subractcount)
  }

  
  const resetButton = ()=>{
    let resetcount={
      count : 0
    }
    this.setState(resetcount)
  }
  return(
    <div className="box">
    <div className="title">Counter App</div>
    <div className="function">{this.state.count}</div>
    <div className="total">
    <div><button onClick={increasingButton} className="add">+</button></div>
    <div><button onClick={decreasingButton} className="sub">-</button></div>
    <div><button onClick={resetButton} className="reset">Reset</button></div>
    </div>
    </div>
  )
}
}
export default counter
