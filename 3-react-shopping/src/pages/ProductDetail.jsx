import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../data/products';
import Container from '../components/Container';
import Rating from '../components/Rating';
import Breadcrumb from '../components/BreadCrumb';
import BreadCrumb from '../components/BreadCrumb';


const ProductDetail = () => {
    const { productId } = useParams();
    const currentProduct = products.find((product) => product.id == productId);
    console.log(currentProduct);
  return (
        <Container>
               <BreadCrumb currentPageTitle="Product Detail" />

            <div className="border border-black p-10 ">
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <img src={currentProduct.image} className='h-40 mx-auto block' alt="" />
                    </div>
                    <div className="col-span-1 flex flex-col items-start gap-5">
                        <h3 className='font-bold text-3xl'>{currentProduct.title}</h3>
                        <p className='bg-gray-300  inline-block px-3 py-1'>{currentProduct.category}</p>
                        <p>{currentProduct.description}</p>
                        <Rating rate = {currentProduct.rating.rate}/>
                        <div className="flex justify-between w-full items-center">
                        <p>{currentProduct.price}</p>
                        <button className='border border-black px-2 py-1 rounded-md'>Add Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
  )
}

export default ProductDetail;
