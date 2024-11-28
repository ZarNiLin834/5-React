import React, { useContext } from 'react'
import Task from './Task';
import TaskContext from '../context/TaskContext';
import useTaskStore from '../store/useTaskStore';

const TaskList = () => {
  // const {tasks} =useContext(TaskContext);
  const {tasks} = useTaskStore();

  return (
    <>
      <div className='mt-3'>
        <h3 className='font-bold text-xl font-serif mb-3 '>Task List
          (Total{tasks.length} , Done{tasks.filter ((el) => el.isDone).length});
        </h3>
        {tasks.map (el => 
          <Task key={el.id} job={el}/>
        )}
      </div>
    </>

  )
}

export default TaskList
