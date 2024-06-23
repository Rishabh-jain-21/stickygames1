import React from "react";
import "./App.css";

const PlayGround = ({ board, handleClick, getStatus }) => {
  return (
    <div className="container">
      <div className="playarea">
        <div className="status">{getStatus()}</div>
        <div className="board">
          {board.map((val, index) => {
            return (
              <button
                key={index}
                className="cell"
                onClick={() => handleClick(index)}
                disabled={val}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
