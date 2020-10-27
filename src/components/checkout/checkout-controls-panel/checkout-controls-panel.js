import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clearCart, sortCart } from '../../../actions';

import './checkout-controls-panel.scss';

const CheckoutControlsPanel = ({ clearCart, sortCart }) => {

    const [optionsState, setOptionsState] = useState('sortIdx');

    const handleChange = (e) => {
        const value = e.target.value;
        setOptionsState(value)
        sortCart(optionsState);
    }

    return (
        <div className="checkout-controls-panel">
            <button type="button" className="link" onClick={() => clearCart()}>Remove all</button>
            <div className="sort-by-options">
                <strong>Sort by:</strong>
                <select name="sort" value={optionsState} onChange={handleChange}>
                    <option value="sortIdx">Added to basket</option>
                    <option value="category">Category</option>
                    <option value="brand">Brand</option>
                    <option value="name">Product</option>
                    <option value="price">Prices</option>
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