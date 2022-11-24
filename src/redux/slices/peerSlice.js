// External Packages
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  localPeer: null,
  localPeerID: null,
  connectedPeerID: null
};

export const peerSlice = createSlice({
  name: "peer",
  initialState,
  reducers: {
    resetPeerSlice: () => initialState,
    setLocalPeer: (state, action) => {
      const { peer, peerID } = action.payload;
      state.localPeer = peer;
      state.localPeerID = peerID;
    },
    setConnectedPeer: (state, action) => {
      const { peerID } = action.payload;
      state.connectedPeerID = peerID;
    }
  }
});

export const {
  resetPeerSlice,
  setLocalPeer,
  setConnectedPeer
} = peerSlice.actions;

export default peerSlice.reducer;