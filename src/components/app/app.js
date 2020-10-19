import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.scss';

import ApiService from '../../services/api-service';
import ApiServiceContext from '../api-service-context';
import ErrorBoundary from '../error-boundary';
import Header from '../header';
import PageTitle from '../page-title';
import { FaqPage, UsersPage } from '../pages';

const App = () => {

    const [apiService] = useState(new ApiService());

    return (
        <ErrorBoundary>
            <ApiServiceContext.Provider value={apiService}>
                <Router>
                    <Header />
                    <div className="pageBody center-holder">
                        <Route path="/"
                            render={(props) => (
                                <PageTitle {...props} title="Welcome to the app, please use the navigation." />
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
};

export default App;