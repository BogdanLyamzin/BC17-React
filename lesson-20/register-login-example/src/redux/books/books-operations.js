import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/books";

export const fetchBooks = createAsyncThunk(
    "books/fetch",
    async(_, {rejectWithValue}) => {
        try {
            const result = await api.getBooks();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addBook = createAsyncThunk(
    "books/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addBook(data);
            return result;
        } catch (error) {
            const {data, status} = error.response;
            return rejectWithValue({data, status});
        }
    },
    {
        condition: (data, {getState}) => {
            const {books} = getState();
            const {title, author} = data;
            const isDublicate = books.items.find(item => item.title === title && item.author === author);
            if(isDublicate) {
                alert(`${title}. ${author} is already exist`);
                return false;
            }
        }
    }
)

export const removeBook = createAsyncThunk(
    "books/remove",
    async(id, {rejectWithValue}) => {
        try {
            const result = await api.removeBook(id);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
