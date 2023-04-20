import "./App.css";
import { IoRefreshOutline } from "react-icons/io5";

function App() {
  return (
    <div className="app">
      <div className="top">
        <div className="xo-container">
          <span className="x">X</span>
          <span className="o">O</span>
        </div>
        <button className="turn">
          <span className="gray-text">X</span>
          <span className="gray-text">TURN</span>
        </button>
        <button className="refresh">
          <IoRefreshOutline />
        </button>
      </div>
      <div className="main">
        <div className="square">
          <div className="x big-text">X</div>
        </div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
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
