import {ADD_TO_FAVORITE} from "./favorite-posts-types";

export const addToFavorite = (payload) => {
        return {
            type: ADD_TO_FAVORITE,
            payload
        }
}