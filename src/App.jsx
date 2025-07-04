import React from "react";
import { useState, useEffect } from "react";
import InputTask from "./Components/inputTask";
import Task from "./Components/tasks";
import Hea from "./Components/heade";

function App() {
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem('item');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('item',JSON.stringify(task));
  },[task]);

  return (
    <React.Fragment>
      <Hea />
      <Task task={task} setTask={setTask}/>
      <InputTask task={task} setTask={setTask}/>
    </React.Fragment>
  )
}

export default App
