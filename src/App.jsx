import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-card">
        <h1>Counter Application</h1>
        <p className="subtitle">React useState Project</p>

        <div className="count-box">
          <h2>{count}</h2>
        </div>

        {count === 0 && (
          <p className="message">Minimum limit reached</p>
        )}

        <div className="buttons">
          <button className="increment" onClick={() => setCount(count + 1)}>
            + Increment
          </button>

          <button
            className="decrement"
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
          >
            - Decrement
          </button>

          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;