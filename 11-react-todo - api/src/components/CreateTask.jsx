/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ring2 } from 'ldrs';
import React, { useState } from 'react';


const CreateTask = ({ addTask, sending }) => {
  const [job, setJob] = useState("");
  const handleOnchange = (event) => {
    setJob(event.target.value);
  }
  ring2.register()


  const handleAddTaskBtn = () => {
    if (job) {
      const newTask = {
        task: job,
        isDone: false,
      }
      addTask(newTask);
      setJob("");
    } else {
      alert("Please fill task")
    }

  }
  return (
    <>
      <div className='flex mt-3'>
        <input
          type="text"
          className='flex-grow border-2 disabled:bg-opacity-50 border-slate-400 rounded-l-lg p-2'
          value={job}
          onChange={handleOnchange}
          placeholder="write your task"
          disabled={sending}
        />
        <button onClick={handleAddTaskBtn} disabled={sending} className='bg-slate-300 border-2 disabled:bg-opacity-50 border-slate-400 rounded-r-lg p-2'>
          {sending ? <l-ring-2
            size="20"
            stroke="5"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="0.8"
            color="black"
          ></l-ring-2> : "Add Task"}
        </button>
      </div>
    </>
  )
}

export default CreateTask
