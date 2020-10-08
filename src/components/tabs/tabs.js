import React from 'react';

import './tabs.scss';

import TabList from '../tab-list';
import TabContent from '../tab-content';
import ErrorBoundary from '../error-boundary';

const Tabs = ({ questionData, onTabClick, activeTab }) => {
    return (
        <ErrorBoundary>
            <React.Fragment>
                <TabList questionData={questionData} onTabClick={onTabClick} activeTab={activeTab} />
                <TabContent questionData={questionData} activeTab={activeTab} />
            </React.Fragment>
        </ErrorBoundary>
    );
};

export default Tabs;