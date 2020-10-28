import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './checkout.scss';

import { fetchProducts } from '../../actions';
import { withApiService } from '../../hoc';
import { compose } from '../../utils';
import CheckoutHeader from './checkout-header';
import CheckoutControlsPanel from './checkout-controls-panel';
import CheckoutProductList from './checkout-product-list';
import CheckoutEmpty from './checkout-empty';
import CheckoutReceiptArea from './checkout-receipt-area';

const Checkout = ({ orderTotalCount, orderTotalPrice, fetchProducts }) => {

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    
    return (
        <>
            <CheckoutHeader total={orderTotalCount} />
            <div className="checkout-container">
                <div className="checkout-product-list-container">
                    {orderTotalCount > 0 &&
                        <>
                            <CheckoutControlsPanel />
                            <CheckoutProductList />
                        </>
                    }
                    {orderTotalCount === 0 &&
                        <CheckoutEmpty />
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

const mapDispatchToProps = (dispatch, { getData }) => {
    return bindActionCreators({
        fetchProducts: fetchProducts(getData)
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