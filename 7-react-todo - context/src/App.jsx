import React, { useState } from 'react'
import Header from './components/Header'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'
import TaskProvider from './store/TaskProvider'

const App = () => {
  
  return (
    <>
    <TaskProvider>
    <div className="p-10">
    <Header />
      <CreateTask />
      <TaskList />
    </div>
    </TaskProvider>
    </>
  )
}

export default App
