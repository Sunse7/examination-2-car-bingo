import { configureStore } from "@reduxjs/toolkit";
import bingoInfoReducer from './bingoInfoSquaresSlice';

export const store = configureStore({
    reducer: bingoInfoReducer
})