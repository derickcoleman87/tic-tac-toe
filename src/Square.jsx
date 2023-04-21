import React, { useState } from "react";
import "./Square.css";

let x = <div className="big-text x">X</div>;
let o = <div className="big-text o">O</div>;

function Square({ turn, setTurn }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => {
        setClicked(true);
        setTurn(turn === "X" ? "O" : "X");
      }}
      className="square"
    >
      {clicked ? (turn === "X" ? x : o) : ""}
    </div>
  );
}

export default Square;
