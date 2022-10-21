import { configureStore } from '@reduxjs/toolkit';
import turnSlice from './slices/turnSlice';




export const store = configureStore({
  reducer: {
    turn: turnSlice,
    
  },
});