import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bingoItems: []
}

export const bingoInfoSquaresSlice = createSlice({
    name: 'bingoItems',
    initialState,
    reducers: {
        fillBingoItems: (state, action) => {
            state.bingoItems.push(action.payload)
        },
        addBingoItem: (state, action) => {

        },
        updateBingoItem: (state, action) => {

        },
        deleteBingoItem: (state, action) => {

        }
    }
})

export const { addBingoItem, updateBingoItem, deleteBingoItem, fillBingoItems } = bingoInfoSquaresSlice.actions;
export default bingoInfoSquaresSlice.reducer;