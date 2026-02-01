import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from "./moviesSlice"
import generalReducer from "./generalSlice"
import configReducer from "./configSlice"
import searchReducer from "./searchSlice";
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            general:generalReducer,
            config:configReducer,
            search: searchReducer,
        }
    }
)
export default appStore