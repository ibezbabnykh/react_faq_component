import React from 'react';

import PageTitle from '../components/common/page-title';
import ProductList from '../components/product-list';

const ProductsPage = () => {
    return (
        <>
            <PageTitle title="Products List" />
            <ProductList />
        </>
    );
}

export default ProductsPage;