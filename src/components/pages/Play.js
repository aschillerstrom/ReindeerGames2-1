
import React, { Component } from 'react';
import {Days,Hours,Minutes,Seconds} from 'react-countdowntimer';
import Header from "../header/header";
import Countdown from './countdown.js';
import { Link, withRouter } from 'react-router-dom';


//import Game from './components/Game.js';
require ('react-dom');


// const App = () => <Game />;

class Play extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentScore: 0,
            Time: Days, Hours , Minutes , Seconds ,
            Challenge: 0,
            ReindeerGame: 0

        };
    }

 //*******  need to add a function  that will count score  adjust time omce game starts **** ///

 //   this.setState({
   //     currentScore: this.state.currentScore + 1,
     //   Time: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore),
  //      Challenge: this.state.Challenge + 1,
    //    ReindeerGame: this.state.ReindeerGame + 1,
      //       });
          
  

      render () {
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
             return (
<<<<<<< HEAD
                <div className="App">
=======
                <div className="play">
>>>>>>> 17a50af161803fcce9845b2c1563125f599d0aa5
            
                   
                    <h3 className="title white-text center-align"> Current Challenge Ends:</h3> 
                    <h4 className=" white-text center-align">  <Countdown  date ={`${year}-07-08T00:00:00`} /></h4>
                    <Header currentScore={this.state.currentScore} Time={this.state.time}/>  
<<<<<<< HEAD
                    <h3 className="title"> Current Challenge Ends:</h3><h6>  <Countdown date ={`${year}-07-08T00:00:00`} /></h6>
            
                </div> 
=======
                   
                    <div id="navbuttons">
                      
                      <Link to="/camera" className="waves-effect waves-light btn" id="login">Take a Pic!</Link>
                      <Link to="/photos" className="waves-effect waves-light btn" id="login">View My Pics</Link>
                      </div>
>>>>>>> 17a50af161803fcce9845b2c1563125f599d0aa5
    
        
                            );
                    }
            }
          
            //class Game extends Component {
        
              //  render() {
                //  return (
                  //  <div>
                    //  <Nav />
                    
                      //<Container>
                    
                     // </Container>
                      
                   // </div>
                  //);
               // }
             // }
              
    
    
    
        
    export default Play;
    //export default Game;