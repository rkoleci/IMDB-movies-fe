// import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../core/movies/movieSlice';

// export const store = configureStore({
//   reducer: {
//     movies: movieReducer,
//   },
// });


import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
    movies: movieReducer,   
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
});

export default store;
