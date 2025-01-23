import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({

    //it takes all the info about reducers.
    reducer:{
        user : userReducer, 
        movies : moviesReducer,
        gpt : gptReducer,
        config : configReducer,
    },
});

export default appStore;