/* eslint-disable no-unused-vars */
import React from 'react'
import ProductCard from './ProductCard'
import Container from './Container'
import useProductStore from '../store/useProductStore'
import useCategoryStore from '../store/useCategoryStore'
// import products from '../data/products'

const ProductSection = () => { 
  const {products}  = useProductStore();
  const {Categories} = useCategoryStore();

  const currentCategory = Categories.find (el => el.isActive === true);
    return (
    <section className='px-5 mb-5'>
               <Container>
               <p className='text-md text-gray-500 mt-4'>Avaiable  Product Lists</p>
                <div className='grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products.filter(el =>currentCategory.name=== "All" || el.category === currentCategory.name).map ((product) => <ProductCard key={product.id}
                        product={product}
                        />)
                    }
                </div>
               </Container>
    </section>
  )
}

export default ProductSection;
