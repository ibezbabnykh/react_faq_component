import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers';

const rootConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(rootConfig, reducer);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export {
    store,
    persistor
}