import React from 'react';

import './add-to-wish-list-btn.scss';

const AddToWishListBtn = ({ onHandleClick }) => {
    return (
        <button
            type="button"
            className="add-to-wish-list-btn"
            onClick={onHandleClick}
        >
            <i className="fas fa-list"></i>
        </button>
    );
}

export default AddToWishListBtn;