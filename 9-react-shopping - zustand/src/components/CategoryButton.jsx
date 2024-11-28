import React from 'react'
import useCategoryStore from '../store/useCategoryStore'

const CategoryButton = ({category:{id,name,isActive}, current}) => {
    const {activeCategory} = useCategoryStore();
    const handleClick = () => {
         activeCategory(id);
    }
    return (
            <button onClick={handleClick} className={`${isActive && " bg-black text-white"} border border-black text-nowrap  px-5 py-1 me-2`}>{name}</button>
    )
}

export default CategoryButton;
