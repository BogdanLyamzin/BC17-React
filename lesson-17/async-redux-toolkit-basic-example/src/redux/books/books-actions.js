import {createAction} from "@reduxjs/toolkit";

export const fetchBooksRequest = createAction("books/fetch/request");
export const fetchBooksSuccess = createAction("books/fetch/success");
export const fetchBooksError = createAction("books/fetch/error");

export const addBookRequest = createAction("books/add/request");
export const addBookSuccess = createAction("books/add/success");
export const addBookError = createAction("books/add/error");

export const removeBookRequest = createAction("books/remove/request");
export const removeBookSuccess = createAction("books/remove/success");
export const removeBookError = createAction("books/remove/error"); 

