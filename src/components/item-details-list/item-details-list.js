import React from 'react';

import './item-details-list.scss';

const Record = ({ item, label, field }) => {
    return <div className="group">
        <strong className="label">{label}</strong>
        <div>{item[field]}</div>
    </div>
}

export {
    Record
}

const ItemDetailsList = (props) => {
    const { children, data: item } = props;

    return (
        <div className="item-details-list">
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, { item });
                })
            }
        </div>
    );
}

export default ItemDetailsList;