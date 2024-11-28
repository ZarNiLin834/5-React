import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext';
import Task from './Task';
import useTaskStore from '../store/useTaskStore';

const CreateTask = () => {
const [job, setJob] =useState("");
// const {addTask} = useContext(TaskContext);
const {addTask} = useTaskStore();
const handleOnchange =(event) => {
  setJob(event.target.value) ;
}

const handleAddTaskBtn = () => {
  const newTask = {
    id:Date.now(),
    task: job,
    isDone : false
  }
  addTask(newTask) ;
  setJob ("");
}
  return (
<>
<div className='flex mt-3'>
      <input
        type="text"
        className='flex-grow border-2 border-slate-400 rounded-l-lg p-2'
        placeholder="write your task"
        value={job}
        onChange={handleOnchange}
        />
      <button onClick={handleAddTaskBtn} className='bg-slate-300 border-2 border-slate-400 rounded-r-lg p-2'>Add Task</button>
    </div>
</>
  )
}

export default CreateTask
