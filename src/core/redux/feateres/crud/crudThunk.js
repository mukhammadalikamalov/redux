// Assuming these actions are defined in "../core/redux/features/crud/crudThunk.js"

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://fakestoreapi.com/products";

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
