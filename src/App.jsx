import "./App.css";
import { IoRefreshOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Square from "./Square";

function App() {
  const [turn, setTurn] = useState("X");
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  useEffect(checkGameOver, [board]);

  function checkGameOver() {
    let result = checkRows();
    if (!result) result = checkColumns();
    if (!result) result = checkDiagonals();

    console.log(result);
  }

  function checkRows() {
    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      if (
        row[0] === "X" ||
        (row[0] === "O" && row[0] === row[1] && row[1] === row[2])
      ) {
        return true;
      }
    }
    return false;
  }

  function checkColumns() {
    for (let column = 0; column < 3; column++) {
      if (
        board[0][column] === "X" ||
        (board[0][column] === "O" &&
          board[0][column] === board[1][column] &&
          board[1][column] === board[2][column])
      ) {
        return true;
      }
    }
    return false;
  }

  function checkDiagonals() {
    if (board[1][1] === "X" || board[1][1] === "O") {
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2])
        return true;
      if (board[0][2] === board[1][1] && board[1][1] === board[2][0])
        return true;
    }
    return false;
  }

  function updateBoard(row, column) {
    if (board[row][column] === "") {
      let updatedBoard = Array.from(board);
      updatedBoard[row][column] = turn;
      setBoard(updatedBoard);
      setTurn(turn === "X" ? "O" : "X");
    }
  }

  return (
    <div className="app">
      <div className="top">
        <div className="xo-container">
          <span className="x">X</span>
          <span className="o">O</span>
        </div>
        <div className="turn">
          <span className="gray-text">{turn}</span>
          <span className="gray-text">TURN</span>
        </div>
        <button className="refresh">
          <IoRefreshOutline />
        </button>
      </div>
      <div className="main">
        <Square value={board[0][0]} clickHandler={() => updateBoard(0, 0)} />
        <Square value={board[0][1]} clickHandler={() => updateBoard(0, 1)} />
        <Square value={board[0][2]} clickHandler={() => updateBoard(0, 2)} />
        <Square value={board[1][0]} clickHandler={() => updateBoard(1, 0)} />
        <Square value={board[1][1]} clickHandler={() => updateBoard(1, 1)} />
        <Square value={board[1][2]} clickHandler={() => updateBoard(1, 2)} />
        <Square value={board[2][0]} clickHandler={() => updateBoard(2, 0)} />
        <Square value={board[2][1]} clickHandler={() => updateBoard(2, 1)} />
        <Square value={board[2][2]} clickHandler={() => updateBoard(2, 2)} />
      </div>
      <div className="bottom">
        <div className="score me-score">
          <p>X (YOU)</p>
          <p>0</p>
        </div>
        <div className="score ties-score">
          <p>TIES</p>
          <p>0</p>
        </div>
        <div className="score cpu-score">
          <p>O (CPU)</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default App;
