import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './reset.scss';

import ApiService from './services/api-service';
import ApiServiceContext from './components/common/api-service-context';
import ErrorBoundary from './components/common/error-boundary';
import App from './components/app';

import store from './store';

const apiService = new ApiService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ApiServiceContext.Provider value={apiService}>
                <Router>
                    <App />
                </Router>
            </ApiServiceContext.Provider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));