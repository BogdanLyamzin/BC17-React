import { combineReducers } from "@reduxjs/toolkit";

import booksReducer from "./books/books-slice";
import favoritePostsReducer from "./favorite-posts/favorite-posts-slice";

const rootReducer = combineReducers({
    books: booksReducer,
    favoritePosts: favoritePostsReducer,
})

export default rootReducer;