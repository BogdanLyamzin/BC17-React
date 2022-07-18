import {configureStore} from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";
// import booksReducer from "./books/books-reducer";
// import favoritePostsReducer from "./favorite-posts/favorite-posts-reducer";

const store = configureStore({
    reducer: rootReducer,
})

// const store = configureStore({
//     reducer: {
//         books: booksReducer,
//         favoritePosts: favoritePostsReducer,
//     }
// })

export default store;

