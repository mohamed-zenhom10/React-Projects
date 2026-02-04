import React from 'react'
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import TaskList from './components/TaskList';
import { useState , useEffect } from 'react';
const App = () => {

  const [taskInput , setTaskInput] = useState("");
  const [tasks , setTasks] = useState(() => {
    const savedItems = localStorage.getItem("tasks");
    return savedItems ? JSON.parse(savedItems): [];
  });


  useEffect(() => {
    localStorage.setItem("tasks" , JSON.stringify(tasks));
  } , [tasks])


  function handleAddTask() {
    if(!taskInput) {
      alert("Please enter a task!");
      return;
    }
    let newTask = {
      id: Date.now(),
      text : taskInput,
      selected: false,
    }

    setTasks([...tasks , newTask]);
    setTaskInput("");
  }

  function handleDeleteTask(id) {
    let confirmMsg = window.confirm("Are Your Sure You  Want To Delete This Task.");
    if(confirmMsg) {
      setTasks(tasks.filter(task => {
        return task.id !== id;
      }))
    }
  }

  function handleSelectTask(id) {
    setTasks(tasks.map(task => {
      return (task.id === id) ? {...task , selected : !task.selected} : task;
    }))
  }


  return (
    <>
      <div className="container">
        <Title />
        <Form taskInput={taskInput} setTaskInput={setTaskInput} handleAddTask={handleAddTask}/>
        <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} handleSelectTask={handleSelectTask}/>
      </div>
    </>
  )
}

export default App