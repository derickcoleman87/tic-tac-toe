import React, { useState } from "react";
import Game from "./Game";
import WinModal from "./WinModal";

function App() {
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className="app">
      <Game setGameOver={setGameOver} />
      {gameOver && <WinModal />}
    </div>
  );
}

export default App;
