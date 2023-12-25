import { createSlice } from "@reduxjs/toolkit";

const initialState: any = []

export const blogSlice = createSlice({
    name: 'blogData',
    initialState,
    reducers: {
        setBlogData(state, action) {
            state = { ...state, ...action.payload };
        }
    }
});

export const { setBlogData } = blogSlice.actions;
export default blogSlice.reducer;
