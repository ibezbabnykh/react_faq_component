import React from 'react';

import { connect } from 'react-redux';

import './header-minibasket.scss';

import { minibasketLoaded } from '../../../actions';

const HeaderMiniBasket = (props) => {

    const { totalItems, totalPrice, isMiniBasketOpen, minibasketLoaded } = props;

    const onBasketOpen = () => {
        minibasketLoaded(!isMiniBasketOpen);
    }

    return (
        <div className="header-minibasket" onClick={onBasketOpen}>
            <i className="fas fa-shopping-cart"></i>
            <span className="total-items">{totalItems}</span>
            <span className="total-price">${totalPrice}</span>
        </div>
    );
}

const mapStateToProps = ({ isMiniBasketOpen }) => {
    return { isMiniBasketOpen }
};

const mapDispatchToProps = {
    minibasketLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMiniBasket);