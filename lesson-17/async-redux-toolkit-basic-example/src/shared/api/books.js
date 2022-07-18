import axios from "axios";

const instance = axios.create({
    baseURL: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/books"
});

export const getBooks = async () => {
    const {data} = await instance.get("/");
    return data;
}

export const addBook = async(data) => {
    const {data: result} = await instance.post("/", data);
    return result;
}

export const updateBook = async(id, data) => {
    const {data: result} = await instance.put(`/${id}`, data);
    return result;
}

export const removeBook = async(id) => {
    const {data} = await instance.delete(`/${id}`);
    return data;
}