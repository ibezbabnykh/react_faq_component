import React from 'react';
import { connect } from 'react-redux';

import { allItemsRemovedFromCart } from '../../../actions';

import './checkout-product-list.scss';
import BasketAdder from '../../common/basket-adder';

const renderRow = (item, onDelete) => {
    const { id, brand, name, description, price, img, count, total } = item;
    return (
        <li key={id}>
            <div className="checkout-product-tile">
                <div className="checkout-product-tile-img">
                    <img src={img} alt="" />
                </div>
                <div className="checkout-product-tile-details">
                    <div className="brand">{brand}</div>
                    <div className="name"><b>{name}</b></div>
                    <div className="description">{description}</div>
                    <div className="price"><b>${price}</b></div>
                </div>
            </div>
            <div className="checkout-product-tile-basket-total">
                <BasketAdder count={count} itemId={id} />
                <div className="checkout-product-tile-total">${total}</div>
            </div>
            <button type="button" className="btn-delete" onClick={() => onDelete(id)}>
                <i className="far fa-trash-alt"></i>
            </button>
        </li>
    )
}

const CheckoutProductList = ({ products, onDelete }) => {
    return (
        <>
            <ul className="checkout-product-list">
                {
                    products.map((item) => renderRow(item, onDelete))
                }
            </ul>
        </>
    );
}

const mapStateToProps = ({ shoppingCart : { cartItems }}) => {
    return {
        products: cartItems
    };
}

const mapDispatchToProps = {
    onDelete: (id) => allItemsRemovedFromCart(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProductList);