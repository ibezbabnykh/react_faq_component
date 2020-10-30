import React from 'react';

import './minibasket-items.scss';

import BasketAdder from '../../common/basket-adder';

const MinibasketItems = ({ products, onDelete }) => {
    const renderItem = (item) => {
        const { id, img, name, brand, count, price, total } = item;

        return (
            <li
                key={id}
                className="minibasket-item"
            >
                <div className="minibasket-item-img">
                    <img src={img} alt={name} />
                </div>
                <div className="minibasket-item-description">
                    <div>{brand}</div>
                    <div><b>{name}</b></div>
                    <div className="price">
                        <span>{price} $/pc</span>
                        <strong>${total}</strong>
                    </div>

                    <BasketAdder 
                        count={count} 
                        itemId={id} 
                    />
                </div>
                <button
                    type="button"
                    className="btn-delete"
                    onClick={() => onDelete(id)}
                >
                    <i className="far fa-trash-alt"></i>
                </button>
            </li>
        );
    };

    return (
        <ul className="minibasket-items">
            {products.map(renderItem)}
        </ul>
    );
}

export default MinibasketItems;