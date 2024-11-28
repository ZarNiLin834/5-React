/* eslint-disable react/prop-types */
// import React from 'react'
 
 export const Container = ({children, className}) => {
  return (
      <div className={`w-full md:w-3/4 mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container
