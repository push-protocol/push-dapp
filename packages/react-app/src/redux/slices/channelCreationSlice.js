/**
 * This file helps us maintain the channel creation state
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  processingState: null
};

export const channelCreationSlice = createSlice({
  name: "channelCreation",
  initialState,
  reducers: {
    setProcessingState: (state, action) => {
      state.processingState = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setProcessingState
} = channelCreationSlice.actions;

export default channelCreationSlice.reducer;
