import {createSlice} from "@reduxjs/toolkit";

const favoritePostsSlice = createSlice({
    name: "favoritePosts",
    initialState:[],
    reducers: {
        add: (store, {payload}) => [...store, payload],
        remove(store, {payload}) {
            store.splice(payload, 1);
        }
    }
})

export const {add, remove} = favoritePostsSlice.actions;

export default favoritePostsSlice.reducer;