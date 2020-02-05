import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { save } from 'redux-localstorage-simple';

const middleware = composeWithDevTools(applyMiddleware(thunk, save({namespace: 'To-Do'})));

const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    middleware
  )
);

const store = configureStore({});

export default store;