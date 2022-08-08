/**
 * This file helps us to maintain the state of the logged in user user(if they have an account)
 * as well as the privilidges the logged in user has
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    channelDetails: null,
    canVerify: false,
    aliasDetails: {
        aliasAddress: null,
        aliasVerified: null,
    },
    delegatees: []
};

export const contractSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setUserChannelDetails: (state, action) => {
            state.channelDetails = action.payload;
        },
        setCanVerify: (state, action) => {
            state.canVerify = action.payload;
        },
        setDelegatees: (state, action) => {
            state.delegatees = action.payload;
        },
        setAliasAddress: (state, action) => {
            state.aliasDetails['aliasAddress'] = action.payload;
        },
        setAliasVerified: (state, action) => {
            state.aliasDetails['aliasVerified'] = action.payload;
        }
    }
});

export const {
    setUserChannelDetails,
    setCanVerify,
    setDelegatees,
    setAliasAddress,
    setAliasVerified
} = contractSlice.actions;

export default contractSlice.reducer;