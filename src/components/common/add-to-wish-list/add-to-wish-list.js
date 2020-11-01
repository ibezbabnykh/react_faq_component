import React from 'react';

import './add-to-wish-list.scss';

import { useOnClickOutside } from '../../../hooks';
import AddToWishListBtn from './add-to-wish-list-btn';
import AddToWishListPicker from './add-to-wish-list-picker';

const AddToWishList = ({ itemId }) => {
    const { ref, isVisible, setIsVisible } = useOnClickOutside(false);
    
    const openAddPicker = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className="add-to-wish-list" ref={ref}>
                <AddToWishListBtn onHandleClick={openAddPicker} />
                {isVisible &&
                    <AddToWishListPicker itemId={itemId} />
                }
            </div>
        </>
    );
};

export default AddToWishList;