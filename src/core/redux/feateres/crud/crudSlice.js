import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://fakestoreapi.com/products";

// Async thunks
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get(API);
  return response.data;
});

export const addProduct = createAsyncThunk("products/addProduct", async (productData) => {
  const response = await axios.post(API, productData);
  return response.data;
});

export const updateProduct = createAsyncThunk("products/updateProduct", async ({ id, ...updates }) => {
  const response = await axios.put(`${API}/${id}`, updates);
  return response.data;
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

// Slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // Add any additional reducers specific to products if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;
