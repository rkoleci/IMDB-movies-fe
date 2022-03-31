import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../core/movies/movieSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
