import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { noteReducer } from './NoteRedux';

// Root Reducer for if I decided to add any other reducer.
const rootReducer = combineReducers({
    notes: noteReducer, 
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['notes'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}