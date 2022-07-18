import axios from "axios";

const instance = axios.create({
    baseURL: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/books"
});

export const getBooks = async () => {
    const {data} = await instance.get("/");
    return data;
}