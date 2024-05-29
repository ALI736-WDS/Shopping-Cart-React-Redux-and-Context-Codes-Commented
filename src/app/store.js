import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/productSlice";
// import cartSlice from "../features/cart/cartSlice";
import cartReducer from "../features/cart/cartSlice"; //taghire name

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
