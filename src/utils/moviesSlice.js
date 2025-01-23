import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies : null,
        topRatedMovies:null,
        popularMovies : null,
        trailerVideo : null,
    },
    reducers: {
        addNowPlayingMovies : (state, action)=>{
          state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action)=>{
          state.popularMovies = action.payload;
        },
        addTrailorVideo : (state, action)=>{
          state.trailerVideo = action.payload;
        },
        addTopRatedMovies : (state, action)=>{
          state.popularMovies = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addTrailorVideo, addPopularMovies, addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;