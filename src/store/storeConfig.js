import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import showsReducer from './reducers/shows';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'storage',
  storage: AsyncStorage
  // whitelist: ['favorities']
};

const reducers = combineReducers({
  storage: persistReducer(persistConfig, showsReducer)
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);
