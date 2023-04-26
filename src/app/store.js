import { configureStore } from "@reduxjs/toolkit";
import bingoInfoReducer from './bingoSquaresSlice';

export const store = configureStore({
    reducer: bingoInfoReducer
})