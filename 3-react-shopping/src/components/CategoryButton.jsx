import React from 'react'

const CategoryButton = ({categoryName, current}) => {
    return (
            <button  className={`${current && " bg-black text-white"} border border-black text-nowrap  px-5 py-1 me-2`}>{categoryName}</button>
    )
}

export default CategoryButton;
