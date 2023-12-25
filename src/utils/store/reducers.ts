import { combineReducers } from '@reduxjs/toolkit';
import blogReducer from "./blogSlice";

const reducers = combineReducers({
    blog: blogReducer
});

export default reducers;
