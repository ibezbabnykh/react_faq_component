import React from 'react';
import { connect } from 'react-redux';

import './product-list.scss';

import ProductListItem from '../product-list-item';

const ProductList = ({ products }) => {
    return (
        <ul>
            {
                products.map((product) => {
                    return <li key={product.id}>
                        <ProductListItem product={product}/>
                    </li>
                })
            }
        </ul>
    );
}

const mapStateToProps = ({ products }) => {
    return { products };
}

export default connect(mapStateToProps)(ProductList);