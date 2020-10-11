import React, { Component } from 'react';

import './tabs.scss';

import TabList from '../tab-list';
import TabContent from '../tab-content';
import ErrorBoundary from '../error-boundary';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withApiService } from '../hoc-helper';

class Tabs extends Component {

    state = {
        questionData: [],
        currentActiveIndex: 0,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.term !== prevProps.term) {
            this.setState({
                loading: true
            });
            this.updateData();
        }
    }

    updateData() {
        this.props
            .getData(this.props.term)
            .then(this.onDataLoad)
            .catch(this.onError);
    }

    onDataLoad = (data) => {
        this.setState({
            questionData: data,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    onTabClick = (id) => {
        this.setState({
            currentActiveIndex: id
        });
    }

    render() {
        const { questionData, currentActiveIndex, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ?
            <React.Fragment>
                <TabList questionData={questionData} onTabClick={this.onTabClick} activeTab={currentActiveIndex} />
                <TabContent questionData={questionData} activeTab={currentActiveIndex} />
            </React.Fragment> : null;

        return (
            <ErrorBoundary>
                {errorMessage}
                {spinner}
                {content}
            </ErrorBoundary>
        );
    };
};

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getQuestionsData
    }
};

export default withApiService(mapMethodsToProps)(Tabs);