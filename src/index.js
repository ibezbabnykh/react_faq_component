import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import ApiService from './services/api-service';
import ApiServiceContext from './components/common/api-service-context';
import ErrorBoundary from './components/common/error-boundary';
import { history } from './helpers';
import App from './components/app';

import store from './store';

const apiService = new ApiService();

ReactDOM.render(
    <Provider store={store}>
            <ErrorBoundary>
                <ApiServiceContext.Provider value={apiService}>
                    <Router history={history}>
                        <App />
                    </Router>
                </ApiServiceContext.Provider>
            </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));