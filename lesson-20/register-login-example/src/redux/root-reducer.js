import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/auth-slice";
import booksReducer from "./books/books-slice";
import favoritePostsReducer from "./favorite-posts/favorite-posts-slice";

const persistConfig = {
    key: 'token',
    storage,
    whitelist: ["token"]
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    books: booksReducer,
    favoritePosts: favoritePostsReducer,
})

export default rootReducer;