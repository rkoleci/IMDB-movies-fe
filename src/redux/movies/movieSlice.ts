import {
  createAsyncThunk,
  createSlice,
  AnyAction,
} from "@reduxjs/toolkit";

import type { RootState } from "@app/store";
import { API_URL, IMDB_API_KEY } from "@app/constants";
import { MovieState } from "@redux/movies/types";

const endpoint = `${API_URL}/AdvancedSearch/${IMDB_API_KEY}?groups=top_250&count=250`;

const initialState: MovieState = {
  data: [],
  status: "idle",
  error: "",
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(endpoint).then((data) => data.json());
      return res;
    } catch (err) {
      return rejectWithValue([]);
    }
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {  
    "fetchMovies.pending": (state) => {
      state.status = "pending";
    },
    "fetchMovies.fulfilled": (state, action: AnyAction) => {
      state.status = "fulfilled";
      state.data = action?.payload?.results;
    },
    "fetchMovies.rejected": (state, action: AnyAction) => {
      state.status = "error";
      state.error = action.error;
    },
  },
});

export const selectMovies = (state: RootState) => state.movies;

export default movieSlice.reducer;
