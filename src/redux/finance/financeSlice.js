import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const client = axios.create({
  baseURL: 'https://financialmodelingprep.com',
});

const apiKey = 'fe1520f6464eea6d99e48aa92523f1de';

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
  data: [],
  isLoading: true,
  error: '',
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStock.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getStock.fulfilled, (state, action) => ({
        ...state,
        data: action.payload.map((item) => ({ ...item, id: uuidv4() })),
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
