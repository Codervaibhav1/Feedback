import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from './slice/feedbackSlice'
const store = configureStore({
    reducer:{
     feedback : feedbackReducer
    }
})


export default store;