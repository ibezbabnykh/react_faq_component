import React from 'react';
import { Link } from 'react-router-dom';

import './checkout-empty.scss';
import avatar from './avatar.png';

const CheckoutEmpty = () => {
    return (
        <div className="checkout-empty">
            <div className="checkout-overlay-content">
                <div className="empty-basket-content">
                    <div className="chatbot-person-avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <h3>Your basket is empty</h3>
                    <Link
                        to="/products"
                        className="btn btn-primary w-full"
                    >
                        Start shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CheckoutEmpty;