import React from 'react';

import './tabs.scss';

import TabList from '../tab-list';
import TabContent from '../tab-content';

const Tabs = ({ questionData, onTabClick, activeTab }) => {
    return (
        <React.Fragment>
            <TabList questionData={questionData} onTabClick={onTabClick} activeTab={activeTab} />
            <TabContent questionData={questionData} activeTab={activeTab} />
        </React.Fragment>
    );
};

export default Tabs;