import React from "react";
import "./WinModal.css";

function WinModal({
  winner,
  roundWinner,
  refreshBoard,
  setXWins,
  setOWins,
  setTies,
}) {
  function quit() {
    refreshBoard();
    setXWins(0);
    setOWins(0);
    setTies(0);
  }
  return (
    <div className="win-modal">
      <p className="gray-text">{roundWinner}</p>
      <h1 className="turquoise-text">{winner} </h1>
      <div className="win-modal_actions">
        <button className="quit-btn" onClick={quit}>
          Quit
        </button>
        <button className="next-round" onClick={refreshBoard}>
          Next Round
        </button>
      </div>
    </div>
  );
}

export default WinModal;
