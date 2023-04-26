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

  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [ties, setTies] = useState(0);

  useEffect(checkGameOver, [board]);

  function checkGameOver() {
    let result = checkWins();
    if (result) {
      //somebody won
      let winner = turn === "X" ? "O" : "X";
      if (winner === "X") {
        setXWins(xWins + 1);
      } else {
        setOWins(oWins + 1);
      }
      return;
    }

    result = checkTie();

    if (result) {
      //somebody tied
      setTies(ties + 1);
    }
    //game isn't over yet
  }

  function checkWins() {
    let result = checkRows();
    if (!result) result = checkColumns();
    if (!result) result = checkDiagonals();
    return result;
  }

  function checkTie() {
    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      for (let column = 0; column < row.length; column++) {
        if (row[column] === "") return false;
      }
    }
    return true;
  }

  function checkRows() {
    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      if (
        (row[0] === "X" || row[0] === "O") &&
        row[0] === row[1] &&
        row[1] === row[2]
      ) {
        return true;
      }
    }
    return false;
  }

  function checkColumns() {
    for (let column = 0; column < 3; column++) {
      if (
        (board[0][column] === "X" || board[0][column] === "O") &&
        board[0][column] === board[1][column] &&
        board[1][column] === board[2][column]
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

  function refreshBoard() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
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
        <button className="refresh" onClick={refreshBoard}>
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
          <p>{xWins}</p>
        </div>
        <div className="score ties-score">
          <p>TIES</p>
          <p>{ties}</p>
        </div>
        <div className="score cpu-score">
          <p>O (CPU)</p>
          <p>{oWins}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
