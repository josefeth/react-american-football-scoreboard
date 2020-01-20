//TODO: STEP 1 - Import the useState hook.
// import React from "react";
import React, {  useState } from "react";
import "./App.css";
import BottomRow from './BottomRow';
import AwayScore from "./AwayScore";

const App=(props) => {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(0);
  
  const touchDown = e => {
    setScore(score + 7);
  };
  const fieldGoal = e => {
    setScore(score + 3);
  };
  
  const sucks1 = e => {
    setPoint(point + 7);
  };
  const sucks = e => {
    setPoint(point + 3);
  };
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Cowboys</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            
            <div className="home__score">{score}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
             <h2 className="away__name">Patriots</h2>
             <div className="away__score">{point}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={touchDown}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={fieldGoal}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          
          {/* <button className="awayButtons__touchdown" onClick={sucks1}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={sucks}>
            Away Field Goal
          </button> */}
        </div>
        <AwayScore sucks1={sucks1} sucks={sucks}/>
      </section>
    </div>
  );
}

export default App;
