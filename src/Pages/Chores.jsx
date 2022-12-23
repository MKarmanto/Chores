import React, { useState, useEffect } from "react";
import ChoresComponent from "../Components/ChoresComponent";

function Chores() {
  //State to store fetched data
  const [tasks, setTasks] = useState(null);
  //State to check if data is loading
  const [isLoading, setIsLoading] = useState(true);
  //State to store error message
  const [error, setError] = useState(null);

  //Fetch data from API on component mount
  useEffect(() => {
    fetch("http://localhost:3010/chores")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  //Render data and pass it to ChoresComponent
  //Render error message if error
  //Render loading message if loading data
  return (
    <>
      {tasks && <ChoresComponent tasks={tasks} />}
      {error && <div className="status">{error}</div>}
      {isLoading && <div className="status">Loading data...</div>}
    </>
  );
}

export default Chores;
