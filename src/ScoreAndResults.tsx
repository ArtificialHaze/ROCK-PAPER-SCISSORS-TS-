import React from "react";

type Props = {};

const ScoreAndResults = (props: Props) => {
  return (
    <>
      <div className="scoreCtn">
        <div className="score">
          <h3>Score</h3>
          <p>Player:</p>
        </div>
        <div className="score">
          <h3>Score</h3>
          <p>PC:</p>
        </div>
      </div>
      <div className="results">
        <div className="playerHand"></div>
        <div className="midCol"></div>
        <div className="computerHand"></div>
      </div>
    </>
  );
};

export default ScoreAndResults;
