/* eslint-disable react/prop-types */
// import React from 'react'

import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi"

const Pagination = ({links:{ prev, next},meta:{total,to, from},updateFetchUrl}) => {
    const handleNextBtn = async () => {
        updateFetchUrl(next) ;
    }

    const handlePrevBtn = async () => {
        updateFetchUrl(prev) ;
    }
    return (
        <div className="flex justify-between mt-2 px-6">
            {/* Help text */}
            <span className="text-xs text-gray-700 dark:text-gray-400">
                Showing <b>{from}</b>  to <b>{to}</b> of <b>{total}</b> Entries
            </span>
            {/* Buttons */}
            <div className="inline-flex mt-2 xs:mt-0">
                <button
                disabled={!prev}    
                onClick={handlePrevBtn}        
                 className="size-8 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none">
                    <HiOutlineArrowLeft />
                </button>

                <button
                disabled={!next}
                onClick={handleNextBtn}
                className="size-8 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none">
                    <HiOutlineArrowRight />
                </button>
            </div>
        </div>

    )
}

export default Pagination
