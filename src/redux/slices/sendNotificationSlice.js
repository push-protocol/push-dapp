import { createSlice } from "@reduxjs/toolkit";

const SEND_NOTIFICATION_STATES = {
    LOADING:0,
    SEND:1,
    HIDE:2
}

const initialState = {
    canSend: SEND_NOTIFICATION_STATES.LOADING,
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
export {SEND_NOTIFICATION_STATES}