import React, { useEffect, useRef, useState } from "react";
import usePrevious from "./Previous";

export default function Todo(props) {
  //State variables for the editing state, the new name and the new tags.
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);
  const [newTags, setNewTags] = useState(props.tags.toString());
  //References to the edit field and the edit button.
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  const wasEditing = usePrevious(isEditing);

  //This function is used to handle the submit event of the form.
  //It calls the editTask function, which is passed in as a prop.
  //It also sets the editing state to false on submit.
  function handleSubmit(e) {
    e.preventDefault();
    //Remove whitespace and split the tags by comma.
    let tagsArrayEdit = newTags.replace(/\s/g, "").split(",");
    props.editTask(props.id, newName, tagsArrayEdit);
    setEditing(false);
  }

  //editingTemplate is a form that allows the user to edit the task's name and tags
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          //setNewName is used to update the newName state variable.
          onChange={(e) => setNewName(e.target.value)}
          ref={editFieldRef}
        />
        <label className="todo-label" htmlFor={props.id}>
          New tags for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newTags}
          //setNewTags is used to update the newTags state variable.
          onChange={(e) => setNewTags(e.target.value)}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          //Set the editing state to false on cancel.
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  //viewTemplate displays the task, tags and checkbox for marking the task as completed.
  //The task can be edited by clicking the edit button.
  //The task can be deleted by clicking the delete button.
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          //This function is used to handle the change event of the checkbox.
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
        <label className="todo-label tags-input" htmlFor={props.id}>
          Tags:
          {newTags}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          //This function is used to handle the click event of the edit button.
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          //This function is used to handle the click event of the delete button.
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
  //This function is used to set the focus to the edit field when the edit button is clicked.
  //It also sets the focus to the edit button when the editing is complete.
  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
