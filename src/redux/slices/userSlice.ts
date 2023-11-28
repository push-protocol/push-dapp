// External Packages
import { PushAPI } from "@pushprotocol/restapi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserSliceState {
  userPushSDKInstance: PushAPI
}

const initialState: IUserSliceState = {
  userPushSDKInstance: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserSlice: () => initialState,
    setUserPushSDKInstance: (state, action: PayloadAction<PushAPI>) => {
      state.userPushSDKInstance = action.payload;
    }
  },
});

export const {
  resetUserSlice,
  setUserPushSDKInstance
} = userSlice.actions;

export default userSlice.reducer;
