import { createSlice } from "@reduxjs/toolkit";
const moviesSlice=createSlice({
      name:"movies",
      initialState:{
       nowPlayingMovies:null,
       nowPlayingTrailer:null,
       playingPopularMovie:null,
       playingTopRatedMovies:null,
       playingUpcomingMovies:null,
       playingTrendingMovies:null,
       trailerMovieId: null,
      },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.nowPlayingTrailer=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.playingPopularMovie=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.playingTopRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.playingUpcomingMovies=action.payload
        },
        addTrendingMovies:(state,action)=>{
            state.playingTrendingMovies=action.payload;
        },
        
    },
})
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovies,addTrendingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;