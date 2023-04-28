import React from "react";
import "./WinModal.css";

function WinModal() {
  return (
    <div className="win-modal">
      <p className="gray-text">YOU WON</p>
      <h1 className="turquoise-text">X TAKES THE ROUND</h1>
      <div className="win-modal_actions">
        <button className="quit-btn">Quit</button>
        <button className="next-round">Next Round</button>
      </div>
    </div>
  );
}

export default WinModal;
