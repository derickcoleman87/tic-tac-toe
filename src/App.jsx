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
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />

        {/* <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} /> */}
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
