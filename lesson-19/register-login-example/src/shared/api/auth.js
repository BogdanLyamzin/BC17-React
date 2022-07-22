import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://auth-backend-lesson.herokuapp.com/api'
})

const setToken = (token = "") => {
    instance.defaults.headers.authorization = `Bearer ${token}`;
}

export const signup = async (data) => {
    const {data: result} = await instance.post("/users/signup", data);
    setToken(result.token);
    return result;
}

export const login = async (data) => {
    const {data: result} = await instance.post("/users/login", data);
    setToken(result.token);
    return result;
}