import React, { useState } from "react";
import "./Square.css";

let x = <div className="big-text x">X</div>;
let o = <div className="big-text o">O</div>;

function Square({ value, x, y, setBoard }) {
  // { turn, setTurn }
  const [clicked, setClicked] = useState(false);
  // const [value, setValue] = useState("");

  return (
    <div
      onClick={() => {
        // if (value === "") {
        //   setValue(turn);
        //   setTurn(turn === "X" ? "O" : "X");
        // }
      }}
      className="square"
    >
      {value === "" ? "" : value === "X" ? x : o}
    </div>
  );
}

export default Square;
