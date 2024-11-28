import React from 'react'
import { Link } from 'react-router-dom'

const ModuleBtn = ({name, icon, url}) => {
  return (
    <div>
        <Link to={url} className='flex h-full flex-col bg-blue-500 items-center p-3  text-white rounded-lg gap-3'> 
        {icon}
        {name}
        </Link>
    </div>
  )
}

export default ModuleBtn
