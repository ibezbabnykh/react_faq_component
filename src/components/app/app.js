import React, { Component } from 'react';

import './app.scss';

import Header from '../header';
import ErrorBoundary from '../error-boundary';
import ApiService from '../../services/api-service';
import { ApiServiceProvider } from '../api-service-context';
import { FaqPage, UsersPage } from '../pages';

export default class App extends Component {

    state = {
        apiService: new ApiService()
    }

    render() {
        return (
            <ErrorBoundary>
                <ApiServiceProvider value={this.state.apiService}>
                    <React.Fragment>
                        <Header />
                        <FaqPage />
                        <UsersPage />
                    </React.Fragment>
                </ApiServiceProvider>
            </ErrorBoundary>
        );
    }
};