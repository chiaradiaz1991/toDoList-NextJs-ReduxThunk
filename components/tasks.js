import React from "react";
import { useSelector } from 'react-redux'

const Tasks = () => {
  const lastUpdateTasks = useSelector((state) => state.reducer.tasks)
  return (
    <React.Fragment>
      <h1>Tasks:</h1>
      <ul>
        {lastUpdateTasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};


export default Tasks;
