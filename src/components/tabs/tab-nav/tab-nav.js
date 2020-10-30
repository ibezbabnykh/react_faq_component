import React from 'react';

import TabNavItem from '../tab-nav-item';
import './tab-nav.scss';

const TabNav = ({ questionData, onTabClick, activeTab }) => {
    const elements = questionData.map(item => {
        const { id, title, entries } = item;

        return (
            <li key={id} className="list-group-item">
                <TabNavItem
                    title={title}
                    quantity={entries.length}
                    active={activeTab === id}
                    onTabClick={() => onTabClick(id)}
                />
            </li>
        );
    });

    return (
        <ul className="tab-nav">
            {elements}
        </ul>
    );
};

export default TabNav;