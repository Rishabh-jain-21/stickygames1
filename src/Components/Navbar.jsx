import React from "react";
import "./App.css";

const Navbar = ({ resetGame, selectedValue, setSelectedValue }) => {
  const handleChange = () => {
    setSelectedValue((prev) => !prev);
    resetGame();
  };

  return (
    <div className="navbarcontainer">
      <div>
        <div className="dropdown-container">
          <select
            id="ticTacToe"
            value={selectedValue}
            onChange={handleChange}
            className="dropdown-select"
          >
            <option value={true}>Infinite Tic Tac Toe</option>
            <option value={false}>Simple Tic Tac Toe</option>
          </select>
        </div>
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Navbar;
