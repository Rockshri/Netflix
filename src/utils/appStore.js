import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";


const appStore = configureStore({

    //it takes all the info about reducers.
    reducer:{
        user : userReducer, 
        movies : moviesReducer,
    }
})

export default appStore;