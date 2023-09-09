import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBeers = createAsyncThunk('beers/getBeers', async () => {
  const response = await axios.get('https://api.punkapi.com/v2/beers');
  return response.data.map((beer) => ({
    id: beer.id,
    name: beer.name,
    description: beer.description,
    image: beer.image_url,
  }));
});

export const purchaseBeerServer = createAsyncThunk('beers/purchaseBeer', async (beer) => beer);

export const cancelPurchaseServer = createAsyncThunk('beers/cancelPurchase', async (id) => id);

export const beerSlice = createSlice({
  name: 'beers',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBeers.fulfilled, (state, action) => action.payload)
      .addCase(purchaseBeerServer.fulfilled, (state, action) => {
        const id = action.payload.id;
        return state.map((beer) => (beer.id === id ? {...beer, purchased: true} : beer));
      })
      .addCase(cancelPurchaseServer.fulfilled, (state, action) => 
        state.map((beer) => (beer.id === action.payload ? {...beer, purchased: false} : beer)))
  },
});

export default beerSlice.reducer;