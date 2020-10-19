import React from 'react';

import './tab-nav-item.scss';

const TabNavItem = ({ title, quantity, onTabClick, active }) => {

    let classNames = 'tab-nav-item';

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

export default TabNavItem;