import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bingoItems: [],
    counter: 0
}

export const bingoInfoSquaresSlice = createSlice({
    name: 'bingoItems',
    initialState,
    reducers: {
        fillBingoItems: (state, action) => {
            state.bingoItems.push(...action.payload)
        },
        fillCounter: (state, action) => {
            state.counter = action.payload;
        },
        addBingoItem: (state, action) => {
            let id = state.counter += 1;
            let newBingoItem = {...action.payload, id: id};
            state.bingoItems.unshift(newBingoItem);
        },
        updateBingoItem: (state, action) => {
            let bingoItemIndex = state.bingoItems.findIndex((bingoItem) => bingoItem.id === action.payload.id);
            state.bingoItems.splice(bingoItemIndex, 1, {text: action.payload.text, id: action.payload.id});
        },
        deleteBingoItem: (state, action) => {
            let bingoItemToRemove = action.payload;
            let bingoItemIndex = state.bingoItems.findIndex((bingoItem) => bingoItem.id === bingoItemToRemove.id);
            state.bingoItems.splice(bingoItemIndex, 1);

        }
    }
})

export const { addBingoItem, updateBingoItem, deleteBingoItem, fillBingoItems, fillCounter } = bingoInfoSquaresSlice.actions;
export default bingoInfoSquaresSlice.reducer;