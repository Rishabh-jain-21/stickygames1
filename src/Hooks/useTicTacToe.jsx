import { useState } from "react";

const initializeBoard = () => {
  return Array(9).fill(null);
};

const useTicTacToe = () => {
  // Initializing empty board
  const [board, setBoard] = useState(initializeBoard());
  const [isXNext, setIsXNext] = useState(true);
  const [xIndices, setXIndices] = useState([]);
  const [oIndices, setOIndices] = useState([]);
  const [selectedValue, setSelectedValue] = useState(true);

  // Winning patterns
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check who is winning
  const checkWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [index1, index2, index3] = WINNING_PATTERNS[i];
      if (
        currentBoard[index1] &&
        currentBoard[index1] === currentBoard[index2] &&
        currentBoard[index2] === currentBoard[index3]
      ) {
        return currentBoard[index1];
      }
    }
    return false;
  };

  // Get the status of the game
  const getStatus = () => {
    const winner = checkWinner(board);
    if (winner) {
      return `${winner} Won this time!`;
    } else if (!board.includes(null)) {
      return "No one wins, it is a draw!!!";
    } else {
      return isXNext ? "X's Turn" : "O's Turn";
    }
  };

  // Handle cell click
  const handleClick = (index) => {
    // Disable turns if there is a winner or the cell is already filled
    const winner = checkWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];

    if (selectedValue) {
      if (isXNext) {
        if (xIndices.length === 3) {
          const oldestXIndex = xIndices[0];
          newBoard[oldestXIndex] = null;
          setXIndices((prev) => prev.slice(1));
        }
        newBoard[index] = "X";
        setXIndices((prev) => [...prev, index]);
        console.log("x", xIndices);
      } else {
        if (oIndices.length === 3) {
          const oldestOIndex = oIndices[0];
          newBoard[oldestOIndex] = null;
          setOIndices((prev) => prev.slice(1));
        }
        newBoard[index] = "O";
        setOIndices((prev) => [...prev, index]);
      }
    } else {
      newBoard[index] = isXNext ? "X" : "0";
    }

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  // Reset Game
  const resetGame = () => {
    setBoard(initializeBoard());
    setIsXNext(true);
    setXIndices([]);
    setOIndices([]);
  };

  return {
    board,
    handleClick,
    isXNext,
    getStatus,
    resetGame,
    selectedValue,
    setSelectedValue,
  };
};

export default useTicTacToe;
