import React from 'react';

import './wish-list.scss';

import Spinner from '../../../common/spinner';
import ErrorIndicator from '../../../common/error-indicator';

const WishList = ({ data, itemId }) => {
    const { list, loading, error } = data;

    const addToList = (id) => {
        // add product to wish list
        console.log('product', id);
    }

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return (
        <>
            {!list.length &&
                <div className="no-lists">Looks like you don't have any shopping lists yet. Click the button below to create a new one.</div>
            }
            <div className="already-in-list">This product is already included within this list.</div>
            <div className="added-in-list">Product added to the list.</div>
            {list.length > 0 &&
                <ul className="wish-list">
                    {
                        list.map(({ id, name }) => {
                            return (
                                <li
                                    key={id}
                                    onClick={() => addToList(itemId)}
                                >
                                    <span className="name">{name}</span>
                                    <i className="fas fa-plus"></i>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </>
    );
}

export default WishList;