/**
 * This file helps us to maintain the state of the logged in user user(if they have an account)
 * as well as the privilidges the logged in user has
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channelDetails: "unfetched",
  //   aliasVerified: null,
  canVerify: false,
  aliasDetails: {
    aliasAddr: null,
    aliasEthAddr: null,
    isAliasVerified: null,
  },
  delegatees: [],
};

export const contractSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setUserChannelDetails: (state, action) => {
      state.channelDetails = action.payload;
    },
    // setAliasVerified: (state, action) => {
    //   state.aliasVerified = action.payload;
    // },
    setCanVerify: (state, action) => {
      state.canVerify = action.payload;
    },
    setDelegatees: (state, action) => {
      state.delegatees = action.payload;
    },
    setAliasAddress: (state, action) => {
      state.aliasDetails["aliasAddr"] = action.payload;
    },
    setAliasEthAddress: (state, action) => {
      state.aliasDetails["aliasEthAddr"] = action.payload;
    },
    setAliasVerified: (state, action) => {
      state.aliasDetails["isAliasVerified"] = action.payload;
    },
  },
});

export const {
  setUserChannelDetails,
  setAliasVerified,
  setCanVerify,
  setDelegatees,
  setAliasAddress,
  setAliasEthAddress,
} = contractSlice.actions;

export default contractSlice.reducer;
