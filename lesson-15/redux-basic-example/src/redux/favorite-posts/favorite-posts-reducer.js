import {ADD_TO_FAVORITE} from "./favorite-posts-types";

const initialStore = [];

const favoritePostsReducer = (store = initialStore, {type, payload}) => {
    switch(type) {
        case ADD_TO_FAVORITE:
            return [...store, payload];
        default: 
            return store;
    }
}

export default favoritePostsReducer;