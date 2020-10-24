import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './basket-adder.scss';

import { itemAddedToCart, fewItemsAddedToCart, itemRemovedFromCart } from '../../../actions';

const BasketAdder = ({ count, itemId, onIncrease, onDecrease, onInputChange }) => {
    const [valueQty, setValueQty] = useState(count);

    useEffect(() => {
        setValueQty(count);
    }, [count]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('valueQty', valueQty);
        onInputChange(itemId, Number(valueQty));
    }

    const handleChange = (e) => {
        setValueQty(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="basket-adder">
                {count >= 1 &&
                    <div className="basket-adder-field" key={valueQty}>
                        <button type="button" className="btn btn-default btn-decrease" onClick={() => onDecrease(itemId)}>
                            <i className="fas fa-minus"></i>
                        </button>
                        <input type="text"
                            className="input-qty form-control"
                            min="0"
                            max="100"
                            defaultValue={valueQty}
                            maxLength="4"
                            onChange={handleChange} />
                        <button type="button" className="btn btn-primary btn-increase" onClick={() => onIncrease(itemId)}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                }
                {count === 0 &&
                    <div className="basket-adder-btns">
                        <button type="button" className="btn btn-primary w-full" onClick={() => onIncrease(itemId)}>Add</button>
                    </div>
                }
            </div>
        </form>
    );
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    onIncrease: (id) => itemAddedToCart(id),
    onDecrease: (id) => itemRemovedFromCart(id),
    onInputChange: (id, qty) => fewItemsAddedToCart(id, qty)
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketAdder);