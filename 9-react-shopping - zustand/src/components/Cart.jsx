/* eslint-disable react/prop-types */
// import React from 'react'
import useProductStore from '../store/useProductStore';
import useCartStore from '../store/useCartStore';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity,removeCart } = useCartStore();
  const product = products.find(el => el.id === productId);

  const cost = product.price * quantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1){
    decreaseQuantity(id);
    }else{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         removeCart(id);
         toast.success("Item remove successfully")
        }
      });
    }
  };

  return (
    <div>
      <div className="border border-black p-5 grid grid-cols-6">
        <div className="col-span-1">
          <img src={product.image} className='h-[60px]' alt="" />
        </div>
        <div className="col-span-3 mb-2">
          <p className='text-md font-bold'>{product.title}</p>
          <p className='text-gray-500 '>Price ({product.price})</p>

        </div>
        <div className="col-span-1">
          <p>Quantity</p>
          <div className="flex gap-2 mt-2">
            <button onClick={handleDecreaseQuantity} className='bg-black px-2 text-white'>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncreaseQuantity} className='bg-black px-2 text-white'>+</button>
          </div>
        </div>
        <div className="col-span-1">
          <p className='text-end font-bold text-xl mt-2'>{cost.toFixed(2)}</p>
        </div>
      </div>
    </div>

  )
}

export default Cart;
