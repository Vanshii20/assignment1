import React, { useState } from "react";

function CounterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-card">
      <h2>Function Component Counter</h2>
      <p className="count">{count}</p>

      <div className="btn-group">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default CounterFunction;
