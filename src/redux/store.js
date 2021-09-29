
import { configureStore, combineReducers, applyMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducers from './contacts/contacts-reducer';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';// defaults to localStorage for web



const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    contacts: contactReducers
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middlebar:[...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [   FLUSH,
                                REHYDRATE,
                                PAUSE,
                                PERSIST,
                                PURGE,
                                REGISTER
            ]
    }
    }), logger],
    devTools: process.env.NODE_ENV === 'development'
    
});

const persistor = persistStore(store);

export default {persistor, store};