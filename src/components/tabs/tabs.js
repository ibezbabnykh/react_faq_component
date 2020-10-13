import React, { useState } from 'react';

import './tabs.scss';

import TabList from '../tab-list';
import TabContent from '../tab-content';
import ErrorBoundary from '../error-boundary';
import { withApiService, withData } from '../hoc-helper';

const Tabs = ({ data }) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

    const onTabClick = (id) => {
        setCurrentActiveIndex(id);
    }

    return (
        <ErrorBoundary>
            <React.Fragment>
                <TabList questionData={data} onTabClick={onTabClick} activeTab={currentActiveIndex} />
                <TabContent questionData={data} activeTab={currentActiveIndex} />
            </React.Fragment>
        </ErrorBoundary>
    );
};

const mapMethodsToProps = (apiService, attr) => {
    return {
        getData: apiService.getQuestionsData.bind(this, attr)
    }
};

export default withApiService(mapMethodsToProps)(withData(Tabs));