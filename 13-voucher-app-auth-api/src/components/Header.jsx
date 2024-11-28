/* eslint-disable no-unused-vars */
import React from 'react'
import Container from './Container'
import useCookie from 'react-use-cookie';

const Header = () => {

  const [userCookies] = useCookie('user');
  console.log(userCookies);

  const {name,email,profile_img} = JSON.parse(userCookies);
  return (
    <header>
      <Container>
        <div className="flex justify-between mt-3">
          <div className="">
            <h1 className='text-2xl font-bold'>Voucher App</h1>
            <p className='text-stone-500 mb-5'>MMS Software</p>
          </div>
          <div className="flex gap-3">
            <img className='size-12 border-2 border-white rounded-full shadow-sm object-cover object-top'
             src={profile_img ? profile_img : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
            <div className="">
              <h1 className='text-xl font-bold'>{name}</h1>
              <p className='text-stone-500 mb-5'>{email}</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
