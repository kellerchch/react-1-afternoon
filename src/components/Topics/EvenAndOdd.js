import React, { Component } from 'react' 
    
    class EvenAndOdd extends Component {
        constructor() {
            super();
          
            this.state = {
              evenArray: [],
              oddArray: [],
              userInput: ''
            }
       
          }

        handleChange(val) {
console.log(val)
            this.setState({ userInput: val });
            }
        assignEvenAndOdds(userInput) {
console.log(userInput)
            var arr = userInput.split(',');
            var evens = [];
            var odds = [];

            for ( var i = 0; i < arr.length; i++) {
                if ( arr[i] % 2 === 0) {
                    evens.push( parseInt(arr[i], 10));
                } else {
                    odds.push( parseInt(arr[i], 10));
                }
            }
            console.log('this is my state', this.state)
            console.log('this is my evens array', evens)
            console.log('this is my odds array', odds)
            this.setState({ evenArray: evens, oddArray:odds}, () => {
                console.log('this is now the state', this.state)
            });
        }
        
        render() {
            return (
            <div className="puzzleBox evenAndOddPB">
              <h4> Evens and Odds </h4>
              <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
              <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
              <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
              <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
            )
          }
      }

  export default EvenAndOdd;