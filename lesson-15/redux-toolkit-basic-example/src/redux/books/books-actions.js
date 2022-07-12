import {createAction} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

export const addBook = createAction("books/add", (data) => {
    return {
        payload: {...data, id: nanoid()}
    }
})

/*
function createAction (type) {
    const func = (payload) => {
        return {
            type,
            payload
        }
    }
    func.type = type;
    func.toString = function() {
        return type;
    }
    return func;
}
*/

export const removeBook = createAction("books/remove");

