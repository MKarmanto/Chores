import React from "react";
import IncrementCounter from "../Components/IncrementCounter";
import RotatingText from "../Components/RotatingText";
import "../CSS/IncrementCounter.css";

function Counter() {
  return (
    <>
      <IncrementCounter />
      <RotatingText />
    </>
  );
}

export default Counter;
