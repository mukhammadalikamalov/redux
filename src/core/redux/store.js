import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../redux/feateres/crud/crudSlice"; // Assuming this is your products slice

export const store = configureStore({
  reducer: {
    products: productsSlice, // Replace posts with products
    // Add other slices if you have more reducers
  },
});
