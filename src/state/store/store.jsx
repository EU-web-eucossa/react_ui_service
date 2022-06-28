import { configureStore } from "@reduxjs/toolkit";

import CartReducer from '../slices/cartSlice';
const store = configureStore({
    reducers: {
        cart: CartReducer
    }
});
export default store;