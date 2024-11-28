import React, { useState } from 'react'

const ShowMyName = () => {
    const [name,setName] = useState("");
    const handleSu =() => {
        setName (name + " " +  "Su") ;
    }
    const handleMyat =() => {
        setName (name + " " +  "Myat") ;
    }
    const handleChal =() => {
        setName (name + " " + "Chal") ;
    }
    const handleClear =() => {
        setName ("") ;
    }
  return (
    <>
      <div className="p-10">
        <h1 className='text-xl font-bold'>Only one daughter name is " {name} "</h1>
        <button onClick={handleSu} className='border bg-black text-white px-2'>Su</button>
        <button onClick={handleMyat} className='border bg-black text-white px-2 m-2'>Myat</button>
        <button onClick={handleChal} className='border bg-black text-white px-2'>Chal</button>
        <button onClick={handleClear} className='border bg-red-500 text-white px-3 ml-5'>Delete</button>
      </div>
    </>
  )
}

export default ShowMyName
