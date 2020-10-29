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
        onInputChange(itemId, valueQty);
    }

    const handleChange = (e) => {
        setValueQty(e.target.value);
    }

    return (
        <div className="basket-adder">
            {count >= 1 &&
            <>
                <form className="basket-adder-field" onSubmit={handleSubmit}>
                    <button type="button" className="btn btn-default btn-decrease" onClick={() => onDecrease(itemId)}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <input type="number"
                        className="input-qty form-control"
                        min="0"
                        max="100"
                        value={valueQty}
                        maxLength="4"
                        inputMode="numeric"
                        onChange={handleChange} />
                    <button type="button" className="btn btn-primary btn-increase" onClick={() => onIncrease(itemId)}>
                        <i className="fas fa-plus"></i>
                    </button>
                </form>
            </>
            }
            {count === 0 &&
                <div className="basket-adder-btns">
                    <button type="button" className="btn btn-primary w-full" onClick={() => onIncrease(itemId)}>Add</button>
                </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    onIncrease: itemAddedToCart,
    onDecrease: itemRemovedFromCart,
    onInputChange: fewItemsAddedToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketAdder);