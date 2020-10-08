import React, { Component } from 'react';

import './app.scss';

import ApiService from '../../services/api-service';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Tabs from '../tabs';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorBoundary from '../error-boundary';

export default class App extends Component {

    apiService = new ApiService();

    state = {
        questionData: [],
        filter: '',
        currentActiveIndex: 0,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.filter !== prevState.filter) {
            this.setState({
                loading: true
            });
            this.updateData();
        }
    }

    updateData() {
        this.apiService
            .getData('5f7c5fa1302a837e95758e63/1', this.state.filter)
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

    onSearchSubmit = (filter) => {
        this.setState({
            filter
        });
    }

    render() {
        const { questionData, currentActiveIndex, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <Tabs questionData={questionData} onTabClick={this.onTabClick} activeTab={currentActiveIndex} /> : null;

        return (
            <ErrorBoundary>
                <div className="app">
                    <AppHeader />
                    <SearchPanel onSearchSubmit={this.onSearchSubmit} />
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </ErrorBoundary>
        );
    }
};