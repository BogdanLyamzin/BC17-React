import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    items: [],
    filter: ""
}

const greateHousesSlice = createSlice({
    name: "greate-houses",
    initialState,
    reducers: {
        add: {
            reducer: (store, { payload }) => {
                store.items.push(payload);
            },
            prepare: (data) => {
                return {
                    payload: { ...data, id: nanoid() }
                }
            },
        },
        remove: (store, { payload }) => {
            store.items = store.items.filter(item => item.id !== payload)
        },
        changeFilter: (store, {payload}) => {
            store.filter = payload;
        }
    }
});

export const {add, remove, changeFilter} = greateHousesSlice.actions;

export default greateHousesSlice.reducer;