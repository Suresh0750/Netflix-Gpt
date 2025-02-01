
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name :'moive',
    initialState :{
        nowPlayingMovie : null,
        trailerVideo : null,
    },
    reducers : {
        addNowPlayingMovie : (state,action)=>{
            state.nowPlayingMovie = action.payload
        },
        addMovieTrailer : (state,action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovie,addMovieTrailer} = moviesSlice.actions

export default moviesSlice.reducer;