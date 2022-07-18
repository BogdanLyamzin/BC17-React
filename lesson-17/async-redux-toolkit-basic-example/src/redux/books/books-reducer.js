import { createReducer, combineReducers } from "@reduxjs/toolkit";

import * as actions from "./books-actions";

const itemsReducer = createReducer([], {
    [actions.fetchBooksSuccess]: (_, {payload}) => payload,
    [actions.removeBookSuccess]: (store, {payload}) => store.filter(item => item.id !== payload),
    [actions.addBookSuccess]: (store, {payload}) => [...store, payload],
});

const loadingReducer = createReducer(false, {
    [actions.fetchBooksRequest]: () => true,
    [actions.fetchBooksSuccess]: () => false,
    [actions.fetchBooksError]: () => false,
    [actions.addBookRequest]: () => true,
    [actions.addBookSuccess]: () => false,
    [actions.addBookError]: () => false,
    [actions.removeBookRequest]: () => true,
    [actions.removeBookSuccess]: () => false,
    [actions.removeBookError]: () => false,
});

const errorReducer = createReducer(null, {
    [actions.fetchBooksRequest]: () => null,
    [actions.fetchBooksError]: (_, {payload}) => payload,
    [actions.removeBookRequest]: () => null,
    [actions.removeBookError]: (_, {payload}) => payload,
    [actions.addBookRequest]: () => null,
    [actions.addBookError]: (_, {payload}) => payload,
});

const booksReducer = combineReducers({
    items: itemsReducer,
    loading: loadingReducer,
    error: errorReducer,
})

export default booksReducer;