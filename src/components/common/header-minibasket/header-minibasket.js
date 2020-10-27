import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import './header-minibasket.scss';

import { minibasketOpened, cartLoaded } from '../../../actions';

const HeaderMiniBasket = (props) => {

    const { isMiniBasketOpen, minibasketOpened, cartItems, orderTotalPrice, orderTotalCount, cartLoaded } = props;

    useEffect(() => {
        cartLoaded();
    }, [cartLoaded]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('orderTotalPrice', orderTotalPrice);
        localStorage.setItem('orderTotalCount', orderTotalCount);
    }, [orderTotalPrice, orderTotalCount, cartItems]);

    const onBasketOpen = () => {
        minibasketOpened(!isMiniBasketOpen);
    }

    return (
        <div className="header-minibasket" onClick={onBasketOpen}>
            <i className="fas fa-shopping-cart"></i>
            <span className="total-items">{orderTotalCount}</span>
            <span className="total-price">${orderTotalPrice.toFixed(2)}</span>
        </div>
    );
}

const mapStateToProps = ({ minibasket: { isMiniBasketOpen }, shoppingCart: { cartItems, orderTotalPrice, orderTotalCount }}) => {
    return { isMiniBasketOpen, cartItems, orderTotalPrice, orderTotalCount }
};

const mapDispatchToProps = {
    minibasketOpened,
    cartLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMiniBasket);