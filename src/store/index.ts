import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import rootReducers from "./reducers/rootReducers";
import loggerMiddleware from './middleware/logger';

const initialState = {};

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer) as any;

const store = createStore(rootReducers, initialState, composedEnhancers);

export default store;