import axios from "axios";

const instance = axios.create({
    baseURL: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/favorite-posts"
})

export const addPost = async(data) => {
    const {data: result} = await instance.post("/", data);
    return result;
} 

export const removePost = async(id) => {
    const {data} = await instance.delete(`/${id}`);
    return data;
}