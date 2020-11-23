import React, { useState } from 'react';

import './checkout-receipt-area.scss';

import { PaymentButton } from '../checkout-button';

const CheckoutReceiptArea = ({ totalPrice }) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    
    const toogleDetails = () => {
        setIsDetailsOpen(!isDetailsOpen);
    };

    return (
        <div className="checkout-receipt-area-container" style={isDetailsOpen ? { height: window.innerHeight - 88 } :  { height: 120 }}>
            <div className="checkout-area-header">
                <div className="checkout-area-header-details visible-xs">
                    <span className="btn-link" onClick={toogleDetails}>
                        <i className="fas fa-chevron-down"></i>
                        Details
                    </span>
                </div>
                <div className="checkout-area-header-total">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                </div>
                <PaymentButton isDisabled={!totalPrice} />
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
                    <PaymentButton isDisabled={!totalPrice} />
                </li>
            </ul>
        </div>
    );
}

export default CheckoutReceiptArea;