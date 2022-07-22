import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/favoritePosts";

export const addPost = createAsyncThunk(
    "favorite-posts/add",
    async({id, ...rest}, {rejectWithValue}) => {
        try {
            const newFavoritePost = {...rest, postId: id};
            const result = await api.addPost(newFavoritePost);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) => {
            const {favoritePosts} = getState();
            const {id, title} = data;
            const isDublicate = favoritePosts.items.find(item => item.postId === id);
            if(isDublicate) {
                alert(`Post ${title} is already in favorite`);
                return false;
            }
        }
    }
)

export const removePost = createAsyncThunk(
    "favofite-posts/remove",
    async(id, {rejectWithValue}) => {
        try {
            const result = await api.removePost(id);
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)