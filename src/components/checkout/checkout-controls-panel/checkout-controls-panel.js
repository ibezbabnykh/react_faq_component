import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { clearCart, sortCart } from '../../../actions';

import './checkout-controls-panel.scss';

const CheckoutControlsPanel = ({ clearCart, sortCart }) => {

    const options = [{
        value: 'sortIdx',
        label: 'Added to basket'
    },
    {
        value: 'category',
        label: 'Category'
    },
    {
        value: 'brand',
        label: 'Brand'
    },
    {
        value: 'name',
        label: 'Product'
    },
    {
        value: 'price',
        label: 'Prices'
    }];

    const optionsElements = options.map(({ value, label }) => <option key={value} value={value}>{label}</option>);

    const [optionsState, setOptionsState] = useState('sortIdx');

    useEffect(() => {
        sortCart(optionsState);
    }, [sortCart, optionsState]);

    const handleChange = (e) => {
        setOptionsState(e.target.value);
    }

    return (
        <div className="checkout-controls-panel">
            <button
                type="button"
                className="link"
                onClick={clearCart}
            >
                Remove all
            </button>
            <div className="sort-by-options">
                <strong>Sort by:</strong>
                <select
                    className="form-control"
                    name="sort"
                    value={optionsState}
                    onChange={handleChange}
                >
                    {optionsElements}
                </select>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    clearCart,
    sortCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutControlsPanel);