import React from 'react';

import TabListItem from '../tab-list-item';
import './tab-list.scss';

const TabList = ({questionData, onTabClick, activeTab}) => {

    const elements = questionData.map((item) => {
        const { id,  ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TabListItem
                    { ...itemProps }
                    active={activeTab === id}
                    onTabClick={() => onTabClick(id)}
                />
            </li>
        );
    });

    return (
        <ul className="tab-list">
            { elements }
        </ul>
    );
};

export default TabList;