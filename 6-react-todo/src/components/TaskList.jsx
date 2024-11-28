import React from 'react'
import Task from './Task';

const TaskList = ({tasks,removeTask,doneTask}) => {
  
  return (
    <>
      <div className='mt-3'>
        <h3 className='font-bold text-xl font-serif mb-3 '>Task List
          (Total{tasks.length} , Done{tasks.filter ((el) => el.isDone).length})
        </h3>
        {tasks.map (el => 
          <Task doneTask={doneTask} removeTask={removeTask} key={el.id} job={el}/>
        )}
      </div>
    </>

  )
}

export default TaskList
