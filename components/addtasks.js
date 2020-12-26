import React, { useState } from "react"
import { addTask } from '../actions'
import { useDispatch } from 'react-redux'

const AddTasks = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) =>{
    const value = e.target.value;
    setInputValue(value);
  }
  const handleClick= ()=> {
    const task  = inputValue;
    dispatch(addTask(task))
  }
  return (
    <React.Fragment>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={() => handleClick()}>New task</button>
    </React.Fragment>
  );
};

export default AddTasks;
