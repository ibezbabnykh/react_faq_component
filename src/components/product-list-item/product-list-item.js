import React from 'react';

import './product-list-item.scss';

import BasketAdder from '../common/basket-adder';

const ProductListItem = ({ product }) => {
    const { id, img, name, brand, price, raitingAvg, count } = product;

    return (
        <div className="product">
            <div className="product-layout">
                <div className="layout-shot">
                    <img src={img} alt={name} />
                </div>
                <div className="layout-content">
                    <div className="layout-details">
                        <strong>{name}</strong>
                        <span>{brand}</span>
                    </div>
                </div>
                <div className="layout-basket-area">
                    <div className="layout-price-details">
                        <span className="raiting">
                            <i className="fas fa-star"></i>
                            {raitingAvg}
                        </span>
                        <strong className="price">{price}$</strong>
                    </div>
                    <div className="layout-footer">
                        <BasketAdder
                            count={count}
                            itemId={id}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductListItem;