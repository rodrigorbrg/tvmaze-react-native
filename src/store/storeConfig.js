import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import showsReducer from './reducers/shows';

const reducers = combineReducers({
  storage: showsReducer,
});

export default createStore(reducers, compose(applyMiddleware(thunk)));
