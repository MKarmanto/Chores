import React from "react";

//This component renders a button that can be used to filter the list of tasks.
//The button has an aria-pressed attribute that is set
//to true if the button is pressed.

//The button has an onClick event handler that
//calls the setFilter function, which is passed in as a prop.
function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
