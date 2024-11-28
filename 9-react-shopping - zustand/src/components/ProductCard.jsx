/* eslint-disable react/prop-types */
// import React from 'react'
import Rating from './Rating';
// import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/useCartStore';

const ProductCard = ({ product: {
  id,
  title,
  price,
  image,
  rating: { rate },
  slug
} }) => {
  const { carts, addCart } = useCartStore();
  const navigate = useNavigate();

  const handelAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("Item is already in my Cart");  
  }
  const handleAddCartBtn = (event) => {
    event.stopPropagation();
    // const isExited = checkExit(id);
    // if (isExited) {
    //   toast.error("Item is already im my Cart");
    // }

    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1
    };
    addCart(newCart);
    toast.success("Item added to cart")
  };

  const handleOpenDetail = () => {
    navigate(`/product-detail/${slug}`);
  };
  return (
    <div
      onClick={handleOpenDetail}
      className='border border-black p-5 flex flex-col items-start gap-3'>
      <img src={image} className='h-40 item-start' alt="" />
      <p className='font-bold line-clamp-2'>{title}</p>
      <Rating rate={rate} />
      <div className="flex w-full justify-between items-end">
        <p>{price}</p>
        {
          carts.find((cart) => cart.productId == id) ? (<button onClick={handelAddedBtn} className='text-sm border border-black px-3 py-1 bg-black text-white'>Added</button>) :
            (<button onClick={handleAddCartBtn} className='text-sm border border-black px-3 py-1'>Add Cart</button>)
        }
      </div>
    </div>
  )
}

export default ProductCard;
