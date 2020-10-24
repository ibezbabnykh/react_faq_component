import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './minibasket.scss';

import EmptyOverlay from './empty-overlay';
import MinibasketItems from './minibasket-items';
import { minibasketLoaded, allItemsRemovedFromCart } from '../../actions';

const MiniBasket = (props) => {

    const { isMiniBasketOpen, minibasketLoaded, onDelete, total, products } = props;

    useEffect(() => {
        minibasketLoaded(isMiniBasketOpen);
    }, [minibasketLoaded, isMiniBasketOpen]);

    const onOverlayClick = () => {
        minibasketLoaded(!isMiniBasketOpen);
    }

    let content;

    if (total === 0) {
        content = <EmptyOverlay />
    } else {
        content = <MinibasketItems products={products} onDelete={onDelete} />;
    }
    
    return (
        <div className={`minibasket ${isMiniBasketOpen ? 'is-open' : ''}`}>
            <div className="minibasket-overlay" onClick={onOverlayClick}></div>
            <div className="minibasket-container">
                { content }
                <div className="checkout-container">
                    <Link to="/checkout" className="btn btn-primary w-full">
                        Go to basket
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ isMiniBasketOpen, cartItems, orderTotalCount }) => {
    return {
        isMiniBasketOpen,
        total: orderTotalCount,
        products: cartItems
    }
};

const mapDispatchToProps = {
    minibasketLoaded,
    onDelete: (id) => allItemsRemovedFromCart(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniBasket);