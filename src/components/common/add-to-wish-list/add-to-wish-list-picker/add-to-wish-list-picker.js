import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './add-to-wish-list-picker.scss';

import { fetchWishList } from '../../../../actions';
import Modal from '../../modal';
import { CreateWishListModal } from '../../../modals-content';

const modalOptions = {
    size: "large",
    title: "Create List",
    hasCloseBtn: true
}

const AddToWishListPicker = ({ list, fetchWishList, itemId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [wishList, setWishList] = useState(list);

    useEffect(() => {
        fetchWishList();
    }, [fetchWishList]);

    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(list));
        setWishList(list);
    }, [list]);

    const toggleModalState = () => {
        setIsOpen(!isOpen);
    };

    const addToList = (id) => {
        // add product to wish list
    }

    return (
        <div className="add-to-wish-list-picker">
            <div className="arrow"></div>
            <div className="content">
                <div className="content-unavailable-product">
                    <strong className="title">Add to shopping list</strong>
                    {!wishList.length &&

                        <div className="no-lists">Looks like you don't have any shopping lists yet. Click the button below to create a new one.</div>
                    }
                    <div className="already-in-list">This product is already included within this list.</div>
                    <div className="added-in-list">Product added to the list.</div>
                    {wishList.length > 0 &&
                        <ul className="list">
                            {
                                wishList.map(item => {
                                    return (
                                        <li key={item} onClick={() => addToList(itemId)}>
                                            <span className="name">{item}</span>
                                            <i className="fas fa-plus"></i>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                    <div className="action">
                        <button
                            className="btn btn-primary btn-create-list w-full"
                            onClick={toggleModalState}
                        >
                            <i className="icon icon-add-to-list-16 m-t-3 m-r-1"></i>
                            Create new list
                        </button>
                        {isOpen &&
                            <Modal
                                {...modalOptions}
                                onClose={toggleModalState}
                            >
                                <CreateWishListModal />
                            </Modal>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ wishList: { list } }) => {
    return { list }
};

const mapDispatchToProps = {
    fetchWishList
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToWishListPicker);