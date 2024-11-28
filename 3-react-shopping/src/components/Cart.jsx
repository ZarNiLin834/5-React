import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
      <div className="border border-black p-5 grid grid-cols-6">
        <div className="col-span-1">
            <img src={cart.product.image} className='h-20' alt="" />
        </div>
        <div className="col-span-3 mb-2">
            <p className='text-md font-bold'>{cart.product.title}</p>
            <p className='text-gray-500 '>Price ({cart.product.price})</p>

        </div>
        <div className="col-span-1">
            <p>Quantity</p>
            <div className="flex gap-2 mt-2">
            <button className='bg-black px-2 text-white'>-</button>
            <p>{cart.quantity}</p>
            <button className='bg-black px-2 text-white'>+</button>
            </div>
        </div>
        <div className="col-span-1">
            <p className='text-end font-bold text-xl mt-2'>{cart.cost}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart;
