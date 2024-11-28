import React, { useState } from 'react'
import Task from './Task';

const CreateTask = ( {addTask}) => {
const [job, setJob] =useState("");
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
