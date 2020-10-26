import React from 'react';
import { connect } from 'react-redux';

import './checkout.scss';

import CheckoutHeader from './checkout-header';
import CheckoutControlsPanel from './checkout-controls-panel';
import CheckoutProductList from './checkout-product-list';
import CheckoutEmpty from './checkout-empty';
import CheckoutReceiptArea from './checkout-receipt-area';

const Checkout = ({ orderTotalCount, orderTotalPrice }) => {
    return (
        <>
            <CheckoutHeader total={orderTotalCount} />
            <div className="checkout-container">
                <div className="checkout-product-list-container">
                    {orderTotalCount === 0 &&
                        <CheckoutEmpty />
                    }
                    {orderTotalCount > 0 &&
                        <>
                            <CheckoutControlsPanel />
                            <CheckoutProductList />
                        </>
                    }
                </div>
                <CheckoutReceiptArea totalPrice={orderTotalPrice} />
            </div>
        </>
    );
}

const mapStateToProps = ({ shoppingCart: { orderTotalCount, orderTotalPrice } }) => {
    return { orderTotalCount, orderTotalPrice }
}

export default connect(mapStateToProps)(Checkout);