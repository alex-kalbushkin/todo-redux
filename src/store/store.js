import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = composeWithDevTools(applyMiddleware(thunk));

const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    middleware
  )
);

const store = configureStore({});

export default store;