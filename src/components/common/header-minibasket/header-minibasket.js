import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './header-minibasket.scss';

import { openMinibasket, fetchCartSuccess } from '../../../actions';

const HeaderMiniBasket = (props) => {

    const { isMiniBasketOpen, openMinibasket, cartItems, orderTotalPrice, orderTotalCount, fetchCartSuccess } = props;

    useEffect(() => {
        fetchCartSuccess();
    }, [fetchCartSuccess]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('orderTotalPrice', orderTotalPrice);
        localStorage.setItem('orderTotalCount', orderTotalCount);
    }, [orderTotalPrice, orderTotalCount, cartItems]);

    const onBasketOpen = () => {
        openMinibasket(!isMiniBasketOpen);
    }

    return (
        <div className="header-minibasket" onClick={onBasketOpen}>
            <i className="fas fa-shopping-cart"></i>
            <span className="total-items">{orderTotalCount}</span>
            <span className="total-price">${orderTotalPrice.toFixed(2)}</span>
        </div>
    );
}

const mapStateToProps = ({
    minibasket: {
        isMiniBasketOpen
    },
    shoppingCart: {
        cartItems,
        orderTotalPrice,
        orderTotalCount
    } }) => {
    return { isMiniBasketOpen, cartItems, orderTotalPrice, orderTotalCount }
};

const mapDispatchToProps = {
    openMinibasket,
    fetchCartSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMiniBasket);