import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './minibasket.scss';

import EmptyOverlay from './empty-overlay';
import MinibasketItems from './minibasket-items';
import { openMinibasket, fetchMinibasketSuccess, removeItemsFromCart } from '../../actions';

const MiniBasket = (props) => {
    const { isMiniBasketOpen, openMinibasket, onMinibasketLoad, onDelete, total, products, history } = props;

    const location = history.location.pathname;

    useEffect(() => {
        onMinibasketLoad();
    }, [onMinibasketLoad, location]);

    const onOverlayClick = () => {
        openMinibasket(!isMiniBasketOpen);
    }

    return (
        <div className={`minibasket ${isMiniBasketOpen ? 'is-open' : ''}`}>
            <div
                className="minibasket-overlay"
                onClick={onOverlayClick}
            ></div>
            <div className="minibasket-container">
                {!total
                    ? <EmptyOverlay />
                    : <MinibasketItems products={products} onDelete={onDelete} />
                }
                <div className="checkout-container">
                    <Link
                        to="/checkout"
                        className="btn btn-primary w-full"
                    >
                        Go to basket
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({
    minibasket: {
        isMiniBasketOpen
    },
    shoppingCart: {
        cartItems,
        orderTotalCount
    }
}) => {
    return {
        isMiniBasketOpen,
        total: orderTotalCount,
        products: cartItems
    }
};

const mapDispatchToProps = {
    onMinibasketLoad: fetchMinibasketSuccess,
    openMinibasket,
    onDelete: removeItemsFromCart
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MiniBasket));