import React, { useState } from 'react'

const App = () => {
  // console.log(useState());
const[count,setCount] = useState(0);

const handleIncrease = () => {
  setCount(count + 1); 
}

const handleDecrease = () => {
  setCount(count - 1); 
}
  return (
    <>
      <div className="p-10">
        <h1 className='text-5xl font-bold'>{count}</h1>
        <button onClick={handleIncrease} className='border bg-black text-white px-3 py-1 mt-2 '>Increasement</button>

        <button onClick={handleDecrease} className='border bg-black text-white px-3 py-1 mt-2 '>Decreasement</button>
      </div>
    </>
  )
}

export default App;
