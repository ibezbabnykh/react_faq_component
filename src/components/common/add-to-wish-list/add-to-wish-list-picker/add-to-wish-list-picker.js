import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './add-to-wish-list-picker.scss';

import {
    fetchWishListsRequest,
    fetchWishListsSuccess,
    fetchWishListsFailure,
    updateWishListsAfterRequest
} from '../../../../actions';
import { withApiService } from '../../../../hoc';
import { fetchItems, compose } from '../../../../utils';
import Modal from '../../modal';
import { CreateWishListModal } from '../../../modals-content';
import WishList from '../wish-list';

const modalOptions = {
    size: "large",
    title: "Create List",
    hasCloseBtn: true
}

const AddToWishListPicker = ({ wishLists, itemId, onWishListsLoad, onPickerClosed }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [wishList, setWishList] = useState(wishLists);

    useEffect(() => {
        // added a delay to emulate receiving data from a real server and show a spinner
        setTimeout(() => {
            onWishListsLoad();
        }, 300);

        return () => {
            onPickerClosed();
        };
    }, [onWishListsLoad, onPickerClosed]);

    useEffect(() => {
        setWishList(wishLists);
    }, [wishLists]);

    const toggleModalState = () => {
        setIsOpen(!isOpen);
    };

    const reloadWishList = () => {
        setWishList({
            ...wishLists,
            list: [],
            loading: true
        });
    }
    
    return (
        <div className="add-to-wish-list-picker">
            <div className="arrow"></div>
            <div className="content">
                <div className="content-unavailable-product">
                    <strong className="title">Add to shopping list</strong>
                    <WishList data={wishList} itemId={itemId} />
                    <div className="action">
                        <button
                            className="btn btn-primary btn-create-list w-full"
                            onClick={toggleModalState}
                        >
                            Create new list
                        </button>
                        {isOpen &&
                            <Modal
                                {...modalOptions}
                                onClose={toggleModalState}
                            >
                                <CreateWishListModal 
                                    onModalClosed={onWishListsLoad} 
                                    reloadWishList={reloadWishList}
                                />
                            </Modal>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ wishLists }) => {
    return { wishLists }
}

const mapDispatchToProps = (dispatch, { getData }) => {
    return bindActionCreators({
        onWishListsLoad: fetchItems(getData, fetchWishListsRequest, fetchWishListsSuccess, fetchWishListsFailure),
        onPickerClosed: updateWishListsAfterRequest
    }, dispatch);
};

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getUserWishList
    }
}

export default compose(
    withApiService(mapMethodsToProps),
    connect(mapStateToProps, mapDispatchToProps)
)(AddToWishListPicker);