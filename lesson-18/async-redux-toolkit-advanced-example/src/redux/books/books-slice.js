import { createSlice } from "@reduxjs/toolkit";

import {fetchBooks, addBook, removeBook} from "./books-operations";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: {
        [fetchBooks.pending]: (store) => ({...store, loading: true, error: null}),
        [fetchBooks.fulfilled]: (store, {payload}) => {
            store.items = payload;
            store.loading = false;
        },
        [fetchBooks.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
        [addBook.pending]: (store) => ({...store, loading: true, error: null}),
        [addBook.fulfilled]: (store, {payload}) => {
            store.items.push(payload);
            store.loading = false;
        },
        [addBook.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
        [removeBook.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [removeBook.fulfilled]: (store, {payload}) => {
            store.items = store.items.filter(item => item.id !== payload.id);
            store.loading = false;
        },
        [removeBook.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        }
    }
});

export default booksSlice.reducer;