import { createStore, combineReducers  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducers from './contacts/contacts-reducer';

const rootReducer = combineReducers({
    contacts: contactReducers
})


const store = createStore(rootReducer,  composeWithDevTools());

export default store;