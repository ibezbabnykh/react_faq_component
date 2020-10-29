import React from 'react';

import './checkout-receipt-area.scss';

const CheckoutReceiptArea = ({ totalPrice }) => {
/* 
for exp: 
const buttonProps = {
    type: 'button',
    className="btn btn-primary w-full"
};

if (!totalPrice) {
    buttonProps = {
        ...buttonProps,
        disapled,
    };
}
*/
    return (
        <div className="checkout-receipt-area-container">
            <div className="checkout-area-header">
                <span>Total</span>
                <span>${totalPrice}</span>
            </div>
            <ul className="checkout-area-item-list">
                <li className="checkout-area-item">
                    <strong>Select a service</strong>
                    <div className="checkout-area-item-select-options">
                        <div className="checkout-area-item-column">
                            <div className="icon-holder">
                                <i className="fas fa-truck"></i>
                            </div>
                            <button type="button" className="btn btn-default w-full">Delivery</button>
                        </div>
                        <div className="checkout-area-item-column">
                            <div className="icon-holder">
                                <i className="fas fa-shopping-basket"></i>
                            </div>
                            <button type="button" className="btn btn-default w-full">Collection</button>
                        </div>
                    </div>
                </li>
                <li className="checkout-area-item">
                    <button type="button" className="btn btn-primary w-full" disabled={totalPrice === 0 ? 'disabled' : ''}>Go to payment</button>
                </li>
            </ul>
        </div>
    );
}

export default CheckoutReceiptArea;