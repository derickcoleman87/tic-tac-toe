import React, { useState } from "react";
import Game from "./Game";

function App() {
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className="app">
      <Game setGameOver={setGameOver} />
      {gameOver && <h1 style={{ color: "white" }}>Game Over Fool</h1>}
    </div>
  );
}

export default App;
