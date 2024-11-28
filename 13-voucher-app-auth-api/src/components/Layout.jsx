/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Header from './Header'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import useCookie from 'react-use-cookie'

const Layout = () => {
  const [token] = useCookie("my_token");
  const navigate = useNavigate();

  if (!token) {
    return <Navigate to="/" />
  }

  return (
    <main>
      <Header />
      <Outlet />
      <Toaster position="top-right" />
    </main>
  )
}

export default Layout
