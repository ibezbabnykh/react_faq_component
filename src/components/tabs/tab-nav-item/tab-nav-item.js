import React from 'react';

import './tab-nav-item.scss';

const TabNavItem = ({ title, quantity, onTabClick, active }) => {
    return (
        <span
            className={`tab-nav-item ${active ? 'active' : ''}`}
            onClick={onTabClick}
        >
            {title} ({quantity})
        </span>
    );
};

export default TabNavItem;