import React from 'react'
import products from '../data/products'
import Cart from './Cart'
import Container from './Container'
import { Link } from 'react-router-dom'
import carts from '../data/cart'

const CartSection = () => {
    // const carts = [
    //     {
    //         id: 1,
    //         product: products[1],
    //         quantity: 2,
    //         cost: 66.9
    //     },
    //     {
    //         id: 7,
    //         product: products[5],
    //         quantity: 1,
    //         cost: 9.99
    //     }
    // ]
    return (
        <>
            <div className="flex flex-col gap-3 h-full">
                {
                    carts.map((cart) => <Cart key={cart.id} cart={cart} />)
                }


                <div className="absolute bottom-0 left-0 w-full ">
                    <Container>
                        <div className="border-t border-black">
                            <div className="flex gap-6 justify-end mt-3">
                                <div>
                                    <p className='text-gray-500'>Total ($)</p>
                                    <p className='font-bold text-end'>66.9</p>
                                </div>
                                <div>
                                    <p className='text-gray-500'>Tax (10%)</p>
                                    <p className='font-bold text-end'>6.9</p>
                                </div>
                                <div>
                                    <p className='text-gray-500'>Net Total ($)</p>
                                    <p className='font-bold text-end'>73.8</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-end mt-3">
                            <Link className='border border-black px-3 py-1'>Order Now</Link>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )


}

export default CartSection
