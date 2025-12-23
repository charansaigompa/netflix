import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTrailer: null,
    searchTrailerMovieId: null,
  },
  reducers: {
    setSearchTrailerMovieId: (state, action) => {
      state.searchTrailerMovieId = action.payload;
      state.searchTrailer = null; // reset old trailer
    },
    setSearchTrailer: (state, action) => {
      state.searchTrailer = action.payload;
    },
    clearSearchTrailer: (state) => {
      state.searchTrailer = null;
      state.searchTrailerMovieId = null;
    },
  },
});

export const {
  setSearchTrailerMovieId,
  setSearchTrailer,
  clearSearchTrailer,
} = searchSlice.actions;

export default searchSlice.reducer;
