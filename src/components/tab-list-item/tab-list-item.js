import React from 'react';

import './tab-list-item.scss';

const TabListItem = ({ title, quantity, onTabClick, active }) => {

    let classNames = 'tab-list-item';

    if (active) {
        classNames += ' active';
    }

    return (
        <span className={classNames}
            onClick={onTabClick}>
            {title} ({quantity})
        </span>
    );
};

export default TabListItem;