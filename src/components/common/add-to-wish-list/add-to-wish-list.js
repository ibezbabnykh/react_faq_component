import React, { useState } from 'react';

import AddToWishListBtn from './add-to-wish-list-btn';
import AddToWishListPicker from './add-to-wish-list-picker';

const AddToWishList = ({ itemId }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleAddPicker = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="add-to-wish-list">
            <AddToWishListBtn onHandleClick={toggleAddPicker} />
            {isVisible &&
                <AddToWishListPicker itemId={itemId} />
            }
        </div>
    );
};

export default AddToWishList;