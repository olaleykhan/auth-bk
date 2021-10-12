import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxThunk from 'redux-thunk';

const middlewares = [reduxThunk];
// const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
