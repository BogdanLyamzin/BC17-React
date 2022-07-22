import {createSlice} from "@reduxjs/toolkit";

import { addPost, removePost } from "./favorite-posts-operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const favoritePostsSlice = createSlice({
    name: "favorite-posts",
    initialState,
    extraReducers: {
        [addPost.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [addPost.fulfilled]: (store, {payload}) => {
            store.items.push(payload);
            store.loading = false;
        },
        [addPost.rejected]: (store, {payload}) => {
            store.error = payload;
            store.loading = false;
        },
        [removePost.fulfilled]: (store, {payload}) => {
            store.items = store.items.filter(item => item.id !== payload.id);
            store.loading = false;
        },
        [removePost.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [removePost.rejected]: (store, {payload}) => {
            store.error = payload;
            store.loading = false;
        },
    }
})

export default favoritePostsSlice.reducer;