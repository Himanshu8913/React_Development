import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        // user: userReducer -- just need to add all reducers
    },
});

export default appStore;