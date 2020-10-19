import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ApiService from '../services/api-service';
import ApiServiceContext from '../components/common/api-service-context';
import ErrorBoundary from '../components/common/error-boundary';
import Header from '../components/common/header';
import PageTitle from '../components/common/page-title';
import FaqPage from './faq-page';
import UsersPage from './users-page';

const HomePage = () => {

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

export default HomePage;