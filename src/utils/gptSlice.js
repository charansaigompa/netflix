import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice(
    {
        name:"gpt",
        initialState:{
            showGptSearch:false,
            searchedMovies:null,
        },
        reducers:{
            toggleGptSearch:(state,action)=>{
                state.showGptSearch=!state.showGptSearch;
            },
            addSearchedMovies:(state,action)=>{
                state.searchedMovies=action.payload
            }
        }

    }
)

export const {toggleGptSearch,addSearchedMovies}=gptSlice.actions
export default gptSlice.reducer