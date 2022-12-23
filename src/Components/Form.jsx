import React, { useState } from "react";

//Form component, which renders a form for adding new tasks.
function Form(props) {
  //The name and tags states are used to store the name and tags of the task.
  const [name, setName] = useState("");
  //The tags state is used to store the tags of the task.
  const [tags, setTags] = useState("");

  //Handles the form submission and adds a new task to the list.
  function handleSubmit(e) {
    //
    e.preventDefault();
    //Remove whitespace and split the tags by comma.
    let tagsArray = tags.replace(/\s/g, "").split(",");
    //Use addTask function from props to add a new task.
    props.addTask(name, tagsArray);
    //Clear the form.
    setName("");
    setTags("");
  }

  //Renders the form.
  //The form has two input fields, one for the name of the task and one for the tags.
  //Name field is required.
  //The form also has a submit button called Add.
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        required
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2 className="label-wrapper">
        <label htmlFor="new-tag-input" className="label__lg">
          Tags for the task, separated by comma
        </label>
      </h2>
      <input
        type="text"
        id="new-tag-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      {
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      }
    </form>
  );
}

export default Form;
