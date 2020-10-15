import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.scss';

import ApiService from '../../services/api-service';
import ApiServiceContext from '../api-service-context';
import ErrorBoundary from '../error-boundary';
import Header from '../header';
import PageTitle from '../page-title';
import { FaqPage, UsersPage } from '../pages';

export default class App extends Component {

    state = {
        apiService: new ApiService()
    }

    render() {
        return (
            <ErrorBoundary>
                <ApiServiceContext.Provider value={this.state.apiService}>
                    <Router>
                        <Header />
                        <div className="pageBody center-holder">
                            <Route path="/" 
                                render={(props) => (
                                    <PageTitle {...props} title="Welcome to the app, please use the navigation."/>
                                )}
                                exact
                            />
                            <Route path="/faq" component={FaqPage} />
                            <Route path="/users/:id?" component={UsersPage} />
                        </div>
                    </Router>
                </ApiServiceContext.Provider>
            </ErrorBoundary>
        );
    }
};