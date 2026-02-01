import { createSlice } from "@reduxjs/toolkit";
const generalSlice=createSlice(
    {
        name:"general",
        initialState:{
            showgeneralSearch:false,
            searchedMovies:null,
        },
        reducers:{
            togglegeneralSearch:(state,action)=>{
                state.showgeneralSearch=!state.showgeneralSearch;
            },
            addSearchedMovies:(state,action)=>{
                state.searchedMovies=action.payload
            }
        }

    }
)

export const {togglegeneralSearch,addSearchedMovies}=generalSlice.actions
export default generalSlice.reducer