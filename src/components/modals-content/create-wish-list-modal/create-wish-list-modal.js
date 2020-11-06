import React, { useState } from 'react';
import { connect } from 'react-redux';

import './create-wish-list-modal.scss';

import { addNewListToWishList } from '../../../actions';

const CreateWishListModal = ({ onClose, addNewListToWishList }) => {
    const [listName, setListName] = useState();

    const onHandleSubmit = (e) => {
        e.preventDefault();
        addNewListToWishList(listName);
        onClose();
    }

    const onHandleChange = (e) => {
        setListName(e.target.value);
    }

    return (
        <form className="new-list-form" onSubmit={onHandleSubmit}>
            <div className="form-group">
                <label htmlFor="list-name">List Name*</label>
                <input
                    type="text"
                    id="list-name"
                    name="list-name"
                    placeholder="List Name"
                    className="form-control"
                    onChange={onHandleChange}
                />
            </div>
            <div className="btn-holder">
                <button type="button" className="btn btn-primary" onClick={onHandleSubmit}>Create List</button>
                <button type="button" className="btn btn-default" onClick={onClose}>Cancel</button>
            </div>
        </form>
    );
}

const mapStateToProps = (state) => {
    return { state }
};

const mapDispatchToProps = {
    addNewListToWishList
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateWishListModal);