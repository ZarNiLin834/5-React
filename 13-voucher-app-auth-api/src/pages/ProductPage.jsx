/* eslint-disable no-unused-vars */
import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import ProductList from '../components/ProductList'

const ProductPage = () => {
    return (
        <>
            <Container>
                <Breadcrumb currentPageTitle={"Product Module"}                />
                <ProductList />
            </Container>
        </>
    )
}

export default ProductPage;
