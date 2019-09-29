//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Button from "./Button";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(12);
  const [awayScore, setAwayScore] = useState(20);
  const [quarter, setQuarter] = useState(1);

  const scoreHandler = (name, amount) => {
    if (name === "home") return setHomeScore(homeScore + amount);
    else if (name === "away") return setAwayScore(awayScore + amount);
    return;
  };

  const quarterHandler = () => {
    if (quarter >= 4) return setQuarter(1);
    else return setQuarter(quarter + 1);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow currentQuarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button
            onClick={() => setHomeScore(homeScore + 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button> */}
          <Button
            cls="homeButtons__touchdown"
            clickHandler={() => scoreHandler("home", 7)}
            btnName="Home Touchdown"
          />
          {/* <button
            onClick={() => setHomeScore(homeScore + 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button> */}
          <Button
            cls="homeButtons__fieldGoal"
            clickHandler={() => scoreHandler("home", 3)}
            btnName="Home Field Goal"
          />
        </div>
        <div className="awayButtons">
          {/* <button
            onClick={() => setAwayScore(awayScore + 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button> */}
          <Button
            cls="awayButtons__touchdown"
            clickHandler={() => scoreHandler("away", 7)}
            btnName="Away Touchdown"
          />
          {/* <button
            onClick={() => setAwayScore(awayScore + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button> */}
          <Button
            cls="awayButtons__fieldGoal"
            clickHandler={() => scoreHandler("away", 3)}
            btnName="Away Field Goal"
          />
        </div>
        <Button
          cls="awayButtons__fieldGoal"
          clickHandler={() => quarterHandler()}
          btnName="change quarter"
        />
      </section>
    </div>
  );
}

export default App;
