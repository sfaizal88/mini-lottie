/**
 * Store component
 * @author - Faizal
 * @date - 15th June 2024
 */
// GENERIC IMPORT
import { configureStore } from '@reduxjs/toolkit';
import animateReducer from './animateSlice';

export const store = configureStore({
  reducer: {
    animate: animateReducer
  }
});

export default store;
