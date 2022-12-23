import React, { useEffect, useState } from "react";
import "../CSS/RotatingText.css";

//This component renders a text that can be used to rotate between two words.
export default function RotatingText() {
  const [text, setText] = useState("foo");

  useEffect(() => {
    const interval = setInterval(() => {
      if (text === "foo") {
        setText("bar");
      } else {
        setText("foo");
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <>
      <h1 className="rotatingText">{text}</h1>
    </>
  );
}
