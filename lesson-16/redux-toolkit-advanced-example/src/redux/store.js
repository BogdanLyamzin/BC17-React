import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import greateHouses from "./greate-houses/greate-houses-slice";

const persistConfig = {
    key: 'greate-houses',
    storage,
    whitelist: ['items']
}

const persistedGreateHouses = persistReducer(persistConfig, greateHouses);

export const store = configureStore({
    reducer: {
        greateHouses: persistedGreateHouses,
    },
})

export const persistor = persistStore(store);


