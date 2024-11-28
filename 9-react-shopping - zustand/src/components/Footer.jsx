import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <div>
        <footer className='mx-5 mt-[50vh] bg-black mx-5 text-white text-center py-2'>
            @ {date.getFullYear()} {" "}
            <a href="https://mms-it.com" className='underline text-gray-300'>MMS IT</a> 
            . All right reserved.
        </footer>
    </div>
  )
}

export default Footer
