import React, { useState } from 'react';

import './tabs-list.scss';

import TabNav from '../tab-nav';
import TabContent from '../tab-content';
import ErrorBoundary from '../../common/error-boundary';
import { withApiService, withData } from '../../../hoc-helper';

const TabsList = ({ data }) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

    const onTabClick = (id) => {
        setCurrentActiveIndex(id);
    }

    return (
        <ErrorBoundary>
            <React.Fragment>
                <TabNav questionData={data} onTabClick={onTabClick} activeTab={currentActiveIndex} />
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

export default withApiService(mapMethodsToProps)(withData(TabsList));