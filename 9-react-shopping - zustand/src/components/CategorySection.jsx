import React from 'react'
import CategoryButton from './CategoryButton';
import Container from './Container';
import useCategoryStore from '../store/useCategoryStore';

const CategorySection = () => {
    const title = "Product Categories";
    const {Categories} = useCategoryStore();
    // const Categories = [
    //      "electronics",
    //     "jewelery",
    //     "men's clothing",
    //     "women's clothing"
    // ];
    return (
        <div>
            <section id="category-section" className="px-5">
               <Container>
               <p className='text-md text-gray-500 mb-4'>{title}</p>
                < div className=' flex overflow-scroll category-button-group'>
                {/*
                <CategoryButton categoryName="electronics"  current={false}/>
                <CategoryButton categoryName="jewellery" current={false}/> */}
                 {/* <CategoryButton categoryName="all" current={true}/> */}
                    {
                        Categories.map(category => (<CategoryButton key={category.id}
                            category={category}
                        current={category.isActive}/>))
                    }
                </div>
               </Container>
            </section>
        </div>
    )
}

export default CategorySection;
