import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times => </p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
