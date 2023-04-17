import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://financialmodelingprep.com',
});

const apiKey = 'fe1520f6464eea6d99e48aa92523f1de';

export const getStockList = createAsyncThunk(
  'finance/get-stock-list',
  async (name, thunkAPI) => {
    try {
      const resp = await client.get(`/api/v3/financial-statement-symbol-lists?apikey=${apiKey}`);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const getStock = createAsyncThunk(
  'finance/getstockItem',
  async (company, thunkAPI) => {
    try {
      const resp = await client.get(`/api/v3/income-statement/${company}?limit=120&apikey=${apiKey}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  stockNames: [],
  stocts: [],
  isLoading: true,
  error: '',
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStockList.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getStockList.fulfilled, (state, action) => ({
        ...state,
        stockNames: action.payload,
        isLoading: false,
      }))

      .addCase(getStockList.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'Something went wrong',
      }))
      .addCase(getStock.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getStock.fulfilled, (state, action) => ({
        ...state,
        stocks: action.payload,
        isLoading: false,
      }))

      .addCase(getStock.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'Something went wrong',
      }));
  },
});

export default financeSlice.reducer;
