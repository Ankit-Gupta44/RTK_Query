import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const final = await res.json();
  return final;
});