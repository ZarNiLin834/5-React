/* eslint-disable no-unused-vars */
import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Container from '../components/Container';
import VoucherCard from '../components/VoucherCard';

const VoucherDetailPage = () => {
  return (
    <section>
    <Container>
        <Breadcrumb currentPageTitle={"Voucher Module"}
            links={[{ title: "Voucher Module", path: "/voucher" }]} />
        <VoucherCard />
    </Container>
</section>
  )
}

export default VoucherDetailPage

