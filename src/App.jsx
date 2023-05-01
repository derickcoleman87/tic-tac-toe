import "./App.css";
import React, { useState } from "react";
import Game from "./Game";
import WinModal from "./WinModal";
import BlackOverlay from "./BlackOverlay";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [roundWinner, setRoundWinner] = useState("");

  return (
    <div className="app">
      <Game
        setGameOver={setGameOver}
        setWinner={setWinner}
        setRoundWinner={setRoundWinner}
      />
      {gameOver && <BlackOverlay />}
      {gameOver && <WinModal winner={winner} roundWinner={roundWinner} />}
    </div>
  );
}

export default App;
