import { createReducer } from "@reduxjs/toolkit";

import { addToFavorite, removeFromFavorite } from "./favorite-posts-actions";

const favoritePostsReducer = createReducer([], {
    [addToFavorite]: (store, {payload}) => [...store, payload],
    [removeFromFavorite]: (store, {payload}) => {
        store.splice(payload, 1);
    }
})

export default favoritePostsReducer;