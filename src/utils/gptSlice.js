import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        showGptSearch : false,
        gptMovies : null,
        gptSearchNames : null
    },
    reducers :{
        toggleGptSearchView : (state,action)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovies : (state,action)=>{
            const {movieNames,movieResults} = action.payload
            state.gptMovies = movieResults
            state.gptSearchNames   = movieNames
        },
    }
})


export const {toggleGptSearchView,addGptMovies} = gptSlice.actions

export default gptSlice.reducer 