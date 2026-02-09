import React from "react";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-1 Counter Application</h1>

      <div className="counter-row">
        <CounterClass />
        <CounterFunction />
      </div>
    </div>
  );
}

export default App;
