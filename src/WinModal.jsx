import React from "react";
import "./WinModal.css";

function WinModal({ winner, roundWinner }) {
  return (
    <div className="win-modal">
      <p className="gray-text">{roundWinner}</p>
      <h1 className="turquoise-text">{winner} </h1>
      <div className="win-modal_actions">
        <button className="quit-btn">Quit</button>
        <button className="next-round">Next Round</button>
      </div>
    </div>
  );
}

export default WinModal;
