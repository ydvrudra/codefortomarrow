import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postSlice.jsx";



export const Store = configureStore({
    reducer:{
        posts:postsReducer
    },
    devTools: true
});

