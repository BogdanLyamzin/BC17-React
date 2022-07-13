import { combineReducers } from "@reduxjs/toolkit";

import greatHousesReducer from "./greate-houses/greate-houses-slice";

const rootReducer = combineReducers({
    greateHouses: greatHousesReducer,
})

export default rootReducer;