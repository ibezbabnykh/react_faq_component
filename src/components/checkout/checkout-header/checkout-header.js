import React from 'react';
import { Link } from 'react-router-dom';

import './checkout-header.scss';

const CheckoutHeader = ({ total }) => {
    return (
        <div className="checkout-header">
            <h3>Your Basket ({total} products)</h3>
            <Link to="/products">
                Continue Shopping
            </Link>
        </div>
    );
}

export default CheckoutHeader;