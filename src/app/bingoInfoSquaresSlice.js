import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bingoItems: []
}

export const bingoInfoSquaresSlice = createSlice({
    name: 'bingoItems',
    initialState,
    reducers: {
        fillBingoItems: (state, action) => {
            state.bingoItems.push(...action.payload)
        },
        addBingoItem: (state, action) => {
            console.log('added');
            //Add id
        },
        updateBingoItem: (state, action, newText) => {
            console.log(action.payload.id);
            let bingoItemToUpdate = action.payload;
            bingoItemToUpdate.text = action.payload.newText;
            let bingoItemIndex = state.bingoItems.findIndex((bingoItem) => bingoItem.id === bingoItemToUpdate.id);
            state.bingoItems.splice(bingoItemIndex, 1, newText);
        },
        deleteBingoItem: (state, action) => {
            let bingoItemToRemove = action.payload;
            let bingoItemIndex = state.bingoItems.findIndex((bingoItem) => bingoItem.id === bingoItemToRemove.id);
            state.bingoItems.splice(bingoItemIndex, 1);

        }
    }
})

export const { addBingoItem, updateBingoItem, deleteBingoItem, fillBingoItems } = bingoInfoSquaresSlice.actions;
export default bingoInfoSquaresSlice.reducer;