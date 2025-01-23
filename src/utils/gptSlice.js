import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState: {
        showGptSearch : false,
    },
    reducers :{
        toggleGptService : (state, action)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const {toggleGptService} = gptSlice.actions;

export default gptSlice.reducer;