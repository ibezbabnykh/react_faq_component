import React, { useState } from 'react';

import './create-wish-list-modal.scss';

import { withApiService } from '../../../hoc';

const CreateWishListModal = ({ postData, onClose, onModalClosed, reloadWishList }) => {
    const [listName, setListName] = useState(null);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        postData({
            entries: null,
            name: listName
        });
        onClose();
        reloadWishList();
        // added a delay to emulate receiving data from a real server and show a spinner
        setTimeout(() => {
            onModalClosed();
        }, 300);
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
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Create List
                </button>
                <button
                    type="button"
                    className="btn btn-default"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

const mapMethodsToProps = (apiService) => {
    return {
        postData: apiService.createWishList
    }
};

export default withApiService(mapMethodsToProps)(CreateWishListModal);