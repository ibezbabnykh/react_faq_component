import React, { Component } from 'react';

import './tabs.scss';

import TabList from '../tab-list';
import TabContent from '../tab-content';
import ErrorBoundary from '../error-boundary';
import { withApiService, withData } from '../hoc-helper';

class Tabs extends Component {

    state = {
        currentActiveIndex: 0
    }

    onTabClick = (id) => {
        this.setState({
            currentActiveIndex: id
        });
    }

    render() {
        const { currentActiveIndex } = this.state;
        const { data } = this.props;

        return (
            <ErrorBoundary>
                <React.Fragment>
                    <TabList questionData={data} onTabClick={this.onTabClick} activeTab={currentActiveIndex} />
                    <TabContent questionData={data} activeTab={currentActiveIndex} />
                </React.Fragment>
            </ErrorBoundary>
        );
    };
};

const mapMethodsToProps = (apiService, attr) => {
    return {
        getData: apiService.getQuestionsData.bind(this, attr)
    }
};

export default withApiService(mapMethodsToProps)(withData(Tabs));