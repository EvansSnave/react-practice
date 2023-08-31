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

const initialState = {
  beers: [],
}

export const beerSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBeers.fulfilled, (state, action) => {
        state.beers = action.payload;
      })
  }
});

export default beerSlice.reducer;