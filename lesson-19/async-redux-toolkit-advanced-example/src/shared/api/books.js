import axios from "axios";

import { instance } from "./auth";

export const getBooks = async () => {
    const {data} = await instance.get("/books");
    return data;
}

export const addBook = async(data) => {
    const {data: result} = await instance.post("/books", data);
    return result;
}

export const updateBook = async(id, data) => {
    const {data: result} = await instance.put(`/books/${id}`, data);
    return result;
}

export const removeBook = async(id) => {
    const {data} = await instance.delete(`/books/${id}`);
    return data;
}