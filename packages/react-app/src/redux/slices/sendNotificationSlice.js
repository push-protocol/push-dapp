import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    canSend: null,
};

export const contractSlice = createSlice({
    name: "canSend",
    initialState,
    reducers: {
        setCanSend: (state, action) => {
            state.canSend = action.payload;
        }
    }
});

export const {
    setCanSend,
} = contractSlice.actions;

export default contractSlice.reducer;