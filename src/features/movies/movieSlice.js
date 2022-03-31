import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL, IMDB_API_KEY } from '../../app/constants'

const url = `${API_URL}/AdvancedSearch/${IMDB_API_KEY}?groups=top_250&count=250`

const initialState = {
  data: [],
  status: 'idle',
  error: ''
}; 

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(url).then(
        (data) => data.json()
      )
      return res
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
) 

export const movieSlice = createSlice({
  name: 'movies',
  initialState, 
  reducers: {}, 
  extraReducers:  {
    [fetchMovies.pending]: (state) => { 
      state.status = "pending";
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      state.status = 'fulfilled'
      state.data = payload?.results
    },
    [fetchMovies.rejected]: (state, {  payload, error }) => {  
      state.status = 'error'
      state.error = error; 
    },
  },
});

export const selectMovies = (state) => state.movies; 

export default movieSlice.reducer;
