import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import carts from '../data/cart'

const ProductCard = ({ product: {
  id,
  title,
  price,
  image,
  rating: { rate }
} }) => {

  return (
    <Link to={`/product-detail/${id}`} className='border border-black p-5 flex flex-col items-start gap-3'>
      <img src={image} className='h-40 item-start' alt="" />
      <p className='font-bold line-clamp-2'>{title}</p>
      <Rating rate={rate}/>
      <div className="flex w-full justify-between items-end">
        <p>{price}</p>
       {
        carts.find((cart) => cart.product.id == id) ? (<button className='text-sm border border-black px-3 py-1 bg-black text-white'>Added</button>) : 
        (<button className='text-sm border border-black px-3 py-1'>Add Cart</button>)
       }
      </div>
    </Link>
  )
}

export default ProductCard;
