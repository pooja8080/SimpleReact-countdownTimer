import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.timer = null;
        this.state = { 
             hours: 0,
             minutes: 0,
             seconds: 0
            };
      }
      startTimer=()=>{
        console.log('Start');
        

         this.timer= setInterval(() => {
            if (this.state.seconds<60 ) {
                  console.log("abc");
            this.setState({seconds: this.state.seconds +1});
            }

            if (this.state.seconds>59) {
                console.log("abc1");
         this.setState({ seconds : this.state.seconds - 60, minutes :this.state.minutes + 1 });
        }
            if (this.state.minutes == 60 ) {
                  console.log("abc2");
            this.setState({ minutes : 0,  hours: this.state.hours+1});
            }
           
        },
        
        100);
        }
         stopTimer=() => {
            console.log('stop');
                clearInterval(this.timer);
             }
         resetTimer=()=> {
              console.log('reset');
                this.setState({seconds:0, minutes:0 , hours:0});
            }

 render(){
     return(
<div class="container">
    <button class="primary-button" onClick={this.startTimer}>Start</button>
     <div class="timings">
    {this.state.hours}:
    {this.state.minutes}:
    {this.state.seconds}
     </div>
     <div class="stop-button">
       <button class="primary-button" onClick={this.stopTimer}>Stop</button>
       <button class="primary-button" onClick={this.resetTimer}>Reset</button>
    </div>
   </div>
     );
 }
}
export default App;





