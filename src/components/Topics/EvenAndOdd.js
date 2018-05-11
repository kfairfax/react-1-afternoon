import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor(){
    super();
    this.state

  }
  render() {
    // console.log(state)
    return(
      
      <div className="puzzleBox evenAndOddPB">

        <h4>"Evens and Odds</h4>
        <input className="inputLine"/>
        <button className="confirmationButton"></button>
        <span className="resultsBox"></span>

      </div>
    )
    
  }
}

export default EvenAndOdd;