import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './minibasket.scss';

import EmptyOverlay from './empty-overlay';
import MinibasketItems from './minibasket-items';
import { minibasketOpened, minibasketLoaded, allItemsRemovedFromCart } from '../../actions';

const MiniBasket = (props) => {

    const { isMiniBasketOpen, minibasketOpened, minibasketLoaded, onDelete, total, products, history } = props;
    
    const location = history.location.pathname;

    useEffect(() => {
        minibasketLoaded();
    }, [minibasketLoaded, location]);

    const onOverlayClick = () => {
        minibasketOpened(!isMiniBasketOpen);
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

const mapStateToProps = ({ minibasket: { isMiniBasketOpen }, shoppingCart: { cartItems, orderTotalCount }}) => {
    return {
        isMiniBasketOpen,
        total: orderTotalCount,
        products: cartItems
    }
};

const mapDispatchToProps = {
    minibasketLoaded,
    minibasketOpened,
    onDelete: (id) => allItemsRemovedFromCart(id)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MiniBasket));