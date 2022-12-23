import React, { useState } from "react";
import "../CSS/ToggleVisibility.css";

//This component renders a button that can be used to toggle the visibility
//of its children.
export default function ToggleVisibility({ children }) {
  const [show, setShow] = useState(true);

  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide info" : "Show Info";

  return (
    <div className="component-container">
      {show && children}
      <button onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}
