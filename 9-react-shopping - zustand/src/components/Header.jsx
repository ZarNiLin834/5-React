// import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import useCartStore from '../store/useCartStore'

const Header = () => {
  const {carts} = useCartStore();
  return (
    <header className='p-5 '>
      <Container>
      <div className="flex justify-between items-center">
        <Link to={"/"} className='font-bold text-3xl text-gray-700'>Online Shop</Link>
        <Link to={"/mycart"} className='border border-black px-5 py-1 relative'>My Cart
            <span className='bg-red-500 px-3 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2'>{carts.length}</span>
        </Link>
      </div>
      </Container>
      
    </header>
  )
}

export default Header
