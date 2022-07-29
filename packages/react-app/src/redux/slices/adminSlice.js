/**
 * This file helps us to maintain the state of the logged in user user(if they have an account)
 * as well as the privilidges the logged in user has
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    channelDetails: null,
    aliasVerified: null,
    canVerify: false,
    delegatees: []
};

export const contractSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setUserChannelDetails: (state, action) => {
            state.channelDetails = action.payload;
        },
        setAliasVerified: (state, action) => {
            state.aliasVerified = action.payload;
        },
        setCanVerify: (state, action) => {
            state.canVerify = action.payload;
        },
        setDelegatees: (state, action) => {
            state.delegatees = action.payload;
        }
    }
});

export const {
    setUserChannelDetails,
    setAliasVerified,
    setCanVerify,
    setDelegatees
} = contractSlice.actions;

export default contractSlice.reducer;
