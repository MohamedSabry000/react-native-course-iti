import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storingMovieReduce} from './reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(config, storingMovieReduce);
const store = createStore(persistedReducer, {});
const persistor = persistStore(store);

export {store, persistor};
