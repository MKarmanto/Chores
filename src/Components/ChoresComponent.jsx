import React, { useState, useRef, useEffect } from "react";
//The nanoid library is used to generate unique IDs for tasks.
import { nanoid } from "nanoid";
import "../CSS/App.css";
import Form from "../Components/Form";
import FilterButton from "../Components/FilterButton";
import Todo from "../Components/Todo";
import usePrevious from "../Components/Previous";
import "../CSS/Chores.css";

//Maps filter names to functions that return a boolean value indicating
//whether a task should be included in the filtered list.
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
//Contains the keys of the FILTER_MAP object.
const FILTER_NAMES = Object.keys(FILTER_MAP);

//Chores component , which takes in a tasks prop and renders a list of tasks along
//with a form for adding new tasks and buttons for filtering the tasks.
function ChoresComponent(props) {
  //The filter state is used to determine which tasks are displayed.
  const [filter, setFilter] = useState("All");
  //The tasks state is used to store the list of tasks.
  const [tasks, setTasks] = useState(props.tasks);

  //Adds a new task to the list and makes a POST request
  //to an API to persist the task.
  function addTask(name, tags) {
    const newTask = { id: `todo-${nanoid()}`, name, tags, completed: false };
    setTasks([...tasks, newTask]);

    fetch("http://localhost:3010/chores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
  }
  //Removes a task from the list and makes a DELETE request
  //to the API to delete the task.
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
    fetch(`http://localhost:3010/chores/${id}`, {
      method: "DELETE",
    });
  }
  //Updates the name and tags of a task and makes a PATCH request
  //to the API to update the task.
  function editTask(id, newName, newTags) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);

    fetch(`http://localhost:3010/chores/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName, tags: newTags }),
    });
  }
  //Toggles the completed status of a task and makes a PATCH request to the API
  //to update the task.
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);

    fetch(`http://localhost:3010/chores/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: updatedTasks[0].completed }),
    });
  }
  //A list of Todo components, which are filtered based on the filter state
  //using the functions in the FILTER_MAP object.
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        tags={task.tags}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));
  //A list of FilterButton components, which are used to set the filter state.
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  //The heading text is updated, if there is only 1 task remaining.
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  //The listHeadingRef is used to focus the heading when a task is deleted.
  const listHeadingRef = useRef(null);
  //The prevTaskLength is used to determine whether a task was deleted.
  const prevTaskLength = usePrevious(tasks.length);

  //When the task list changes, the listHeadingRef is focused if a task was deleted.
  //This ensures that the screen reader announces the updated heading.
  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  //Renders a Form component, a list of FilterButton components(filterlist),
  //a heading (headingText), and a list of Todo components(taskList).
  return (
    <div className="todoapp stack-large">
      <h1>Tasks & Chores</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default ChoresComponent;
