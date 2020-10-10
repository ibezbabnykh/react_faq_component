import React, { Component } from 'react';

import './app.scss';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Tabs from '../tabs';
import ErrorBoundary from '../error-boundary';
import ApiService from '../../services/api-service';
import { ApiServiceProvider } from '../api-service-context';

export default class App extends Component {

    state = {
        filter: '',
        apiService: new ApiService()
    }

    onSearchSubmit = (filter) => {
        this.setState({
            filter
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <ApiServiceProvider value={this.state.apiService}>
                    <div className="app">
                        <AppHeader />
                        <SearchPanel onSearchSubmit={this.onSearchSubmit} />
                        <Tabs term={this.state.filter} />
                    </div>
                </ApiServiceProvider>
            </ErrorBoundary>
        );
    }
};