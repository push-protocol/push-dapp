/**
 * This file helps us maintain the channel creation state
 */
import { createSlice } from "@reduxjs/toolkit";

/*
processingState {
  0: complete
  1: 1st state (processing alias state)
  2: 2nd state (change network state)
  3: 3rd state (verify alias state)
  null: nothing
}
*/

const initialState = {
  processingState: null,
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
export const { setProcessingState } = channelCreationSlice.actions;

export default channelCreationSlice.reducer;
