import React, { Component } from 'react';

import './app.scss';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Tabs from '../tabs';
import ErrorBoundary from '../error-boundary';

export default class App extends Component {

    state = {
        filter: ''
    }

    onSearchSubmit = (filter) => {
        this.setState({
            filter
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <div className="app">
                    <AppHeader />
                    <SearchPanel onSearchSubmit={this.onSearchSubmit} />
                    <Tabs term={this.state.filter}/>
                </div>
            </ErrorBoundary>
        );
    }
};