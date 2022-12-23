import React, { useState } from "react";
import "../CSS/IncrementCounter.css";

//This component renders a button that can be used to increment a counter.
export default function IncrementCounter() {
  const [count, setCount] = useState(0);
  const countPlus = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter">
      <button className="button" onClick={countPlus}>
        Click for +1
        <span className="button-text"></span>
      </button>
      {count}
    </div>
  );
}
