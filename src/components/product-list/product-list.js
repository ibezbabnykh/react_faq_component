import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './product-list.scss';

import { withApiService, withData } from '../../hoc';
import { compose } from '../../utils';
import { fetchProductsSuccess } from '../../actions';
import ProductListItem from '../product-list-item';

const ProductList = (props) => {
    const { products, fetchProductsSuccess, data } = props;

    useEffect(() => {
        fetchProductsSuccess(data);
    }, [fetchProductsSuccess, data]);

    return (
        <ul className="product-list">
            {
                products.map(product => {
                    return (
                        <li key={product.id}>
                            <ProductListItem product={product} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

const mapStateToProps = ({ productList: { products } }) => {
    return { products };
}

const mapDispatchToProps = {
    fetchProductsSuccess
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