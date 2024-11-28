/* eslint-disable no-unused-vars */
import React from 'react';

const SkeletonLoader = () => {
    return (
        <div>
            <div className="animate-pulse">
                <div className='flex justify-between items-center border border-slate-400 p-2 mb-3 rounded-lg'>
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <div className="rounded-full bg-slate-300 h-5 w-5"></div>
                            <div className=' bg-slate-300 h-5 w-40 rounded-lg'></div>
                        </div>
                        <div className="bg-slate-300 h-5 w-8 rounded-full"></div>
                    </div>
                </div>

                <div className='flex justify-between items-center border border-slate-400 p-2 mb-3 rounded-lg'>
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <div className="rounded-full bg-slate-300 h-5 w-5"></div>
                            <div className=' bg-slate-300 h-5 w-40 rounded-lg'></div>
                        </div>
                        <div className="bg-slate-300 h-5 w-8 rounded-full"></div>
                    </div>
                </div>

                <div className='flex justify-between items-center border border-slate-400 p-2 mb-3 rounded-lg'>
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <div className="rounded-full bg-slate-300 h-5 w-5"></div>
                            <div className=' bg-slate-300 h-5 w-40 rounded-lg'></div>
                        </div>
                        <div className="bg-slate-300 h-5 w-8 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SkeletonLoader;
