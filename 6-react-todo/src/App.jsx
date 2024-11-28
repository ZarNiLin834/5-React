import React, { useState } from 'react'
import Header from './components/Header'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTask] =  useState([
    { id: 1, task: "Wake up at 6:30 AM", isDone: false },
    { id: 2, task: "Exercise for 30 minutes", isDone: true },
    { id: 3, task: "Breakfast at 7:30 AM", isDone: false },
    { id: 4, task: "Prepare for bed at 9:30 PM", isDone: false },
    { id: 5, task: "Sleep by 10:30 PM", isDone: true }
  ]);

  const addTask = ((newTask) => setTask([...tasks,newTask]));

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  } ;

  const doneTask = (id) => {
    setTask(tasks.map((el) => el.id === id ? {...el,isDone: !el.isDone} :el));
  }
  return (
    <>
    <div className="p-10">
      <Header />
      <CreateTask addTask = {addTask}/>
      <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks}/>
    </div>
    </>
  )
}

export default App
