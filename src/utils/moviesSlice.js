
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name :'moive',
    initialState :{
        nowPlayingMovie : null,
        trailerVideo : null,
        popularMovies : null
    },
    reducers : {
        addNowPlayingMovie : (state,action)=>{
            state.nowPlayingMovie = action.payload
        },
        addMovieTrailer : (state,action)=>{
            state.trailerVideo = action.payload
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload
        }
    }
})

export const {addNowPlayingMovie,addMovieTrailer,addPopularMovies} = moviesSlice.actions

export default moviesSlice.reducer;