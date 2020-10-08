import React, { Component } from 'react';

import './tabs.scss';

import ApiService from '../../services/api-service';
import TabList from '../tab-list';
import TabContent from '../tab-content';
import ErrorBoundary from '../error-boundary';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class Tabs extends Component {

    apiService = new ApiService();

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
        this.apiService
            .getData('5f7c5fa1302a837e95758e63/1', this.props.term)
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

