import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const booksSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        add: {
            reducer(store, {payload}) {
                store.push(payload);
            },
            prepare(data) {
                return {
                    payload: {...data, id: nanoid()}
                }
            }
        },
        remove: (store, {payload}) => store.filter(item => item.id !== payload),
    }
});

export const {add, remove} = booksSlice.actions;

export default booksSlice.reducer;