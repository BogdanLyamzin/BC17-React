import { ADD_BOOK, REMOVE_BOOK } from "./types";

const initialStore = [];

const reducer = (store = initialStore, {type, payload}) => {
    switch(type) {
        case ADD_BOOK:
            return [...store, payload];
        case REMOVE_BOOK:
            return store.filter(item => item.id !== payload);
        default: 
            return store;
    }
}

export default reducer;