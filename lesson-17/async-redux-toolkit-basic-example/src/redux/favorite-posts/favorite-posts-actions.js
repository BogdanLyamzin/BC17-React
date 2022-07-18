import {createAction} from "@reduxjs/toolkit";

export const addToFavorite = createAction("favoritePosts/add");

export const removeFromFavorite = createAction("favoritePosts/remove");
