import React from 'react';

import { connect } from 'react-redux';

import './header-minibasket.scss';

import { minibasketLoaded } from '../../../actions';

const HeaderMiniBasket = (props) => {

    const { isMiniBasketOpen, minibasketLoaded, orderTotalPrice, orderTotalCount } = props;

    const onBasketOpen = () => {
        minibasketLoaded(!isMiniBasketOpen);
    }

    return (
        <div className="header-minibasket" onClick={onBasketOpen}>
            <i className="fas fa-shopping-cart"></i>
            <span className="total-items">{orderTotalCount}</span>
            <span className="total-price">${orderTotalPrice}</span>
        </div>
    );
}

const mapStateToProps = ({ minibasket: { isMiniBasketOpen }, shoppingCart: { orderTotalPrice, orderTotalCount }}) => {
    return { isMiniBasketOpen, orderTotalPrice, orderTotalCount }
};

const mapDispatchToProps = {
    minibasketLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMiniBasket);