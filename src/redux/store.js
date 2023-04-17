import { configureStore } from '@reduxjs/toolkit';
import financeReducer from './finance/financeSlice';

const store = configureStore({
  reducer: {
    finance: financeReducer,
  },
});

export default store;
