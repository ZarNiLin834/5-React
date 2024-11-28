// import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="items-center flex flex-col gap-2">
        <h1 className='text-xl font-bold'>404 Not Found</h1>
        <p className='w-96 text-gray-500'>Lorem ipsum dolor sit, amet consectetur cum eaque dolor sint aut dignissimos alias veniam debitis modi?</p>
        <Link to={"/"} className='border border-black px-3'>Return to Home</Link>
      </div>

    </div>

  )
}

export default ErrorPage
