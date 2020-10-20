import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ApiService from './services/api-service';
import ApiServiceContext from './components/common/api-service-context';
import ErrorBoundary from './components/common/error-boundary';

import { HomePage, FaqPage, UsersPage } from './routers';
import Header from './components/common/header';
import './reset.scss';

import store from './store';

const apiService = new ApiService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ApiServiceContext.Provider value={apiService}>
                <Router>
                    <Header />
                    <div className="pageBody center-holder">
                        <Route path="/" component={HomePage} exact />
                        <Route path="/faq" component={FaqPage} />
                        <Route path="/users/:id?" component={UsersPage} />
                    </div>
                </Router>
            </ApiServiceContext.Provider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));