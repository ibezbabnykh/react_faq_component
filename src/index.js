import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './reset.scss';

import ApiService from './services/api-service';
import ApiServiceContext from './components/common/api-service-context';
import ErrorBoundary from './components/common/error-boundary';
import App from './components/app';

import { store, persistor } from './store';

const apiService = new ApiService();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundary>
                <ApiServiceContext.Provider value={apiService}>
                    <Router>
                        <App />
                    </Router>
                </ApiServiceContext.Provider>
            </ErrorBoundary>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));