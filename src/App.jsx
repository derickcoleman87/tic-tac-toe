import "./App.css";
import { IoRefreshOutline } from "react-icons/io5";
import { useState } from "react";
import Square from "./Square";

function App() {
  const [turn, setTurn] = useState("X");
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  function updateBoard(row, column) {
    if (board[row][column] === "") {
      board[row][column] = turn;
      setBoard(board);
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
