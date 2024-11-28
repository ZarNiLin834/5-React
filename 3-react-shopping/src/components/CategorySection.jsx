import React from 'react'
import CategoryButton from './CategoryButton';
import Container from './Container';

const CategorySection = () => {
    const title = "Product Categories";
    const Categories = [
         "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];
    return (
        <div>
            <section id="category-section" className="px-5">
               <Container>
               <p className='text-md text-gray-500 mb-4'>{title}</p>
                < div className=' flex overflow-scroll category-button-group'>
                {/*
                <CategoryButton categoryName="electronics"  current={false}/>
                <CategoryButton categoryName="jewellery" current={false}/> */}
                 <CategoryButton categoryName="all" current={true}/>
                    {
                        Categories.map(category => (<CategoryButton key={category} categoryName={category}
                        current={false}/>))
                    }
                </div>
               </Container>
            </section>
        </div>
    )
}

export default CategorySection;
