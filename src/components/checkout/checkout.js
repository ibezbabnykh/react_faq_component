import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './checkout.scss';

import { fetchProducts, cartLoaded } from '../../actions';
import { withApiService } from '../../hoc';
import { compose } from '../../utils';
import Spinner from '../common/spinner';
import ErrorIndicator from '../common/error-indicator';
import CheckoutHeader from './checkout-header';
import CheckoutControlsPanel from './checkout-controls-panel';
import CheckoutProductList from './checkout-product-list';
import CheckoutEmpty from './checkout-empty';
import CheckoutReceiptArea from './checkout-receipt-area';

const Checkout = ({ orderTotalCount, orderTotalPrice, fetchProducts, cartLoaded, loading, error }) => {

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    useEffect(() => {
        if (!loading && loading != null) {
            cartLoaded();
        }
    }, [loading, cartLoaded]);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

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

const mapStateToProps = ({ productList: { loading, error }, shoppingCart: { orderTotalCount, orderTotalPrice } }) => {
    return { loading, error, orderTotalCount, orderTotalPrice }
}

const mapDispatchToProps = (dispatch, { getData }) => {
    return bindActionCreators({
        fetchProducts: fetchProducts(getData),
        cartLoaded
    }, dispatch);
};

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getProducts
    }
}

export default compose(
    withApiService(mapMethodsToProps),
    connect(mapStateToProps, mapDispatchToProps)
)(Checkout);