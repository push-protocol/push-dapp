/**
 * This file helps us maintain the modal visiblity state so that the modal state is not changed when there are re renders.
 */

// External Packages
import { createSlice } from '@reduxjs/toolkit';

export interface IModalSliceState {
  isAllowNotifModalVisible: boolean;
}

const initialState: IModalSliceState = {
  isAllowNotifModalVisible: false, //the current page
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    resetModalSlice: () => initialState,
    setAllowNotifModalVisibility: (state, action) => {
      state.isAllowNotifModalVisible = action.payload.flag;
    },
  },
});

export const { resetModalSlice, setAllowNotifModalVisibility } = modalSlice.actions;

export default modalSlice.reducer;
