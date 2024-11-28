import React, { useState } from 'react'
import useCounterStore from '../store/useCounterStore';

const Counter = () => {
    const {count,resetCount,increaseCount,decreaseCount} =useCounterStore();

    // console.log(useCounterStore());
    // const [count,setCount] =useState(7);

    const handleReset = () => {
        // setCount(0) ;
        resetCount();
    };
    const handleIncreasement = () => {
        // setCount(count + 1) ;
        increaseCount(2);
    };
    const handleDecreament = () => {
        // setCount(count - 1) ;
        decreaseCount(1);
    };
  return (
    <>
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-5">
                <h1 className="text-2xl font-bold text-center space-x-6 mb-4">
                    Counter
                </h1>
                <div className="flex justify-center items-center space-x-6 mb-4">
                    <button onClick={handleDecreament} className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600">
                        -
                    </button>
                    <span className="text-center font-bold text-6xl">{count}</span>
                    <button onClick={handleIncreasement} className="bg-green-300 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600">
                        +
                    </button>
                </div>
                <div className="flex text-center">
                <buttton onClick={handleReset} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 w-full">
                    Reset
                </buttton>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter
