import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slice";
import booksReducer from "./books/books-slice";
import favoritePostsReducer from "./favorite-posts/favorite-posts-slice";

const rootReducer = combineReducers({
    auth: authReducer,
    books: booksReducer,
    favoritePosts: favoritePostsReducer,
})

export default rootReducer;