import React from 'react';
import Navbar from './Navbar';
import PlayGround from './PlayGround';
import useTicTacToe from "../Hooks/useTicTacToe.jsx";

const App = () => {
  const { board, handleClick, getStatus, resetGame, selectedValue, setSelectedValue } = useTicTacToe();
  return (
    <>
      <div>
        <Navbar resetGame={resetGame} setSelectedValue={setSelectedValue} selectedValue={selectedValue} />
        <PlayGround
          board={board}
          handleClick={handleClick}
          getStatus={getStatus}
        />
      </div>
    </>
  )
}

export default App;