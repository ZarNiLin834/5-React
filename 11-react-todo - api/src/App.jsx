/* eslint-disable no-unused-vars */
import { ring2 } from 'ldrs'
import React, { useEffect, useState } from 'react'
import CreateTask from './components/CreateTask'
import Header from './components/Header'
import SkeletonLoader from './components/SkeletonLoader'
import TaskList from './components/TaskList'


const App = () => {
  const [tasks, setTask] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [sending, setSending] = useState(false);
  ring2.register()

  const addTask = async (newTask) => {
    setSending(true);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask),
    })

    const data = await res.json();
    console.log(data);
    setTask([...tasks, data]);
    setSending(false);
    // console.log(newTask);
  };

  const removeTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
    const data = await res.text();
    console.log(data);
    setTask(tasks.filter((task) => task.id !== id));
  }

  const doneTask = async (id, currentState) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ isDone: !currentState })
    })

    const data = await res.json();
    console.log(data);
    setTask(tasks.map((el) => el.id === id ? { ...el, isDone: !el.isDone } : el));
  };

  const fetchTask = async () => {
    setTaskLoading(true);
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json();
    setTask(data);
    setTaskLoading(false);
  };


  useEffect(() => {
    fetchTask();
    //  console.log("hello")
  }, []);

  return (
    <>
      <div className="p-10">
        <Header />
        <CreateTask sending={sending} addTask={addTask} />
        <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks} />
        {taskLoading && <p>loading.....</p>}
        {taskLoading && <SkeletonLoader />}
      </div>
    </>
  )
}

export default App


