import { combineReducers } from "redux";

import booksReducer from "./books/books-reducer";
import favoritePostsReducer from "./favorite-posts/favorite-posts-reducer";

const rootReducer = combineReducers({
    books: booksReducer,
    favoritePosts: favoritePostsReducer,
})

export default rootReducer;