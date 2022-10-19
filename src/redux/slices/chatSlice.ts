/**
 * This file helps us maintain the w2w chat storage variables
*/
import { createSlice } from "@reduxjs/toolkit";
import { ConnectedUser, Feeds } from 'api';
import type { PayloadAction } from '@reduxjs/toolkit'
import { BlockedLoadingI } from "sections/chat/ChatMainSection";

// To be removed later
// intents: Feeds[];      ** we are not using it anywhere**
// setIntents: (intents: Feeds[]) => void;  ** we are not using it anywhere**

type SliceState = {
    currentChat: Feeds,
    viewChatBox: boolean,
    receivedIntents: Feeds[];
    searchedUser: string;
    connectedUser: ConnectedUser;
    intents: Feeds[];
    inbox: Feeds[];
    pendingRequests: number;
    hasUserBeenSearched: boolean;
    loadingMessage: string;
    activeTab: number;
    userShouldBeSearched: boolean;
    blockedLoading: BlockedLoadingI;
}

const initialState: SliceState = {
    currentChat: null,
    viewChatBox: false,
    receivedIntents: [],
    searchedUser: '',
    connectedUser: null,
    intents: [],
    inbox: [],
    pendingRequests: 0,
    hasUserBeenSearched: false,
    loadingMessage: '',
    activeTab: 0,
    userShouldBeSearched: false,
    blockedLoading: {
      enabled: false,
      title: null,
    }
}
 
export const chatSlice = createSlice({
   name: "chat",
   initialState,
   reducers: {
      resetChatsSlice: () => initialState,
      setInbox: (state, action: PayloadAction<Feeds[]>) => {
         state.inbox = action.payload;
      },
      setChat: (state, action: PayloadAction<Feeds>) => {
         const feed = action.payload;
         if (feed) {
            state.viewChatBox = true;
            state.currentChat = feed;
          } else {
            state.viewChatBox = false;
          }
      },
      setReceivedIntents: (state, action: PayloadAction<Feeds[]>) => {
         state.receivedIntents = action.payload;
      },
      setSearchedUser: (state, action: PayloadAction<string>) => {
         state.searchedUser = action.payload;
      },
      setConnectedUser:  (state, action: PayloadAction<ConnectedUser>) => {
         state.connectedUser = action.payload;
      },
      setIntents:  (state, action: PayloadAction<Feeds[]>) => {
         state.intents = action.payload;
      },
      setPendingRequests: (state, action: PayloadAction<number>) => {
         state.pendingRequests = action.payload;
      },
      setHasUserBeenSearched: (state, action: PayloadAction<boolean>) => {
         state.hasUserBeenSearched = action.payload;
      },
      setLoadingMessage: (state, action: PayloadAction<string>) => {
         state.loadingMessage = action.payload;
      },
      setBlockedLoading: (state, action: PayloadAction<BlockedLoadingI>) => {
         state.blockedLoading = action.payload;
      },
      setActiveTab: (state, action: PayloadAction<number>) => {
         state.activeTab = action.payload;
      },
      setUserShouldBeSearched: (state, action: PayloadAction<boolean>) => {
         state.userShouldBeSearched = action.payload;
      },
   }
});
 
export const {
   resetChatsSlice,
   setInbox,
   setChat,
   setActiveTab,
   setBlockedLoading,
   setConnectedUser,
   setHasUserBeenSearched,
   setIntents,
   setLoadingMessage,
   setPendingRequests,
   setReceivedIntents,
   setSearchedUser,
   setUserShouldBeSearched
} = chatSlice.actions;

export default chatSlice.reducer;
