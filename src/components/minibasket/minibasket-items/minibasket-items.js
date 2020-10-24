import React from 'react';

import './minibasket-items.scss';

import BasketAdder from '../../common/basket-adder';

const MinibasketItems = ({ products, onDelete }) => {
    return (
        <ul className="minibasket-items">
            {
                products.map((item) => {
                    const { id, img, name, brand, count, total } = item;
                    return <li key={id} className="minibasket-item">
                        <div className="minibasket-item-img">
                            <img src={img} alt={name} />
                        </div>
                        <div className="minibasket-item-description">
                            <div>{brand}</div>
                            <div><b>{name}</b></div>
                            <strong className="price">${total}</strong>
                            <BasketAdder count={count} itemId={id}/>
                        </div>
                        <button type="button" className="btn-delete" onClick={() => onDelete(id)}>
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </li>
                })
            }
        </ul>
    );
}

export default MinibasketItems;