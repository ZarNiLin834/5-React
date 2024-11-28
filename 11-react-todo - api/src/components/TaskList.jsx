/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Task from './Task';

const TaskList = ({tasks,removeTask,doneTask}) => {
  
  return (
    <>
      <div className='mt-3'>
        <h3 className='font-bold text-xl font-serif mb-3 flex justify-between'><div>Task List</div>
          <div>
          Total {tasks.length} / Done {tasks.filter ((el) => el.isDone).length}
          </div>
        </h3>
        {tasks.map (el => 
          <Task doneTask={doneTask} removeTask={removeTask} key={el.id} job={el}/>
        )}
      </div>
    </>

  )
}

export default TaskList
