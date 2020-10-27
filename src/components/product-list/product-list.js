import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './product-list.scss';

import { withApiService, withData } from '../../hoc';
import { compose } from '../../utils';
import { productsLoaded } from '../../actions';
import ProductListItem from '../product-list-item';

const ProductList = (props) => {
    const { products, productsLoaded, data } = props;

    useEffect(() => {
        productsLoaded(data);
        localStorage.setItem('productList', JSON.stringify(data))
    }, [productsLoaded, data]);

    return (
        <ul className="product-list">
            {
                products.map((product) => {
                    return <li key={product.id}>
                        <ProductListItem product={product} />
                    </li>
                })
            }
        </ul>
    );
}

const mapStateToProps = ({ productList: { products }}) => {
    return { products };
}

const mapDispatchToProps = {
    productsLoaded
}

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getProducts
    }
}

export default compose(
    withApiService(mapMethodsToProps),
    connect(mapStateToProps, mapDispatchToProps)
)(withData(ProductList));