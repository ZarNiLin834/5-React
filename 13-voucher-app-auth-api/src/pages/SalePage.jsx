/* eslint-disable no-unused-vars */
import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import VoucherInfo from '../components/VoucherInfo'
import Container from '../components/Container'

const SalePage = () => {
  return (
    <div>
      <Container>
        <Breadcrumb currentPageTitle={'Sale Module'} />
        <VoucherInfo />
      </Container>
    </div>
  )
}

export default SalePage
