import React from 'react';

import './checkout.scss';

import CheckoutHeader from './checkout-header';
import CheckoutProductList from './checkout-product-list';

const Checkout = () => {
    return (
        <>
            <CheckoutHeader total="4"/>
            <div className="checkout-container">
                <div className="checkout-product-list-container">
                    <CheckoutProductList />
                </div>
                <div className="checkout-receipt-area-container">

                </div>
            </div>
        </>
    );
}

export default Checkout;