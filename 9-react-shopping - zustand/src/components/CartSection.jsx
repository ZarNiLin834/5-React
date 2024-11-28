// import React from 'react'
// import products from '../data/products'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import Container from './Container'
// import carts from '../data/cart'
import emptyCartImg from '../asset/Empty-cuate.svg'
import useCartStore from '../store/useCartStore'
import useProductStore from '../store/useProductStore'

const CartSection = () => {
    const { carts } = useCartStore();
    const { products } = useProductStore();
    const total = carts.reduce((pv, cv) => {
        const cost = cv.quantity * products.find(({ id }) => id === cv.productId).price;
        return pv + cost;
    }, 0);

    const Tax = total * 0.05;

    const NetTotal = total + Tax;
    return (
        <>
            <div className="flex flex-col gap-3">

                {
                    carts.length == 0 ? (
                        <img src={emptyCartImg} className='w-[200px] block mt-10 mx-auto' alt="" />
                    ) : carts.map((cart) => <Cart key={cart.id} cart={cart} />)
                }

                <div className=" flex-1 w-full mb-5">
                    <Container className='px-5'>
                        <div className="border-t border-black">
                            <div className="flex gap-6 justify-end mt-3">
                                <div>
                                    <p className='text-gray-500'>Total($)</p>
                                    <p className='font-bold text-end'>{total.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p className='text-gray-500'>Tax (10%)</p>
                                    <p className='font-bold text-end'>{Tax.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p className='text-gray-500'>Net Total ($)</p>
                                    <p className='font-bold text-end'>{NetTotal.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-end mt-3">
                            <Link className='border border-black px-3 py-1 '>Order Now</Link>
                        </div>
                    </Container>
                </div>
              
            </div>
            
        </>
    )


}

export default CartSection
