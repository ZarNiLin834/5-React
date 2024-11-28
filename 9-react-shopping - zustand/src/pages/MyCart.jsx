// import React from 'react'
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import CartSection from '../components/CartSection';

const MyCart = () => {
  return (
    <div>
      <Container className="flex-grow px-5">
        <BreadCrumb currentPageTitle="My Cart" />
        <CartSection />
      </Container>
    </div>
  )
}

export default MyCart;
