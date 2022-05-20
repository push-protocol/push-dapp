/**
 * This file helps us maintain the spamnotifications fetched in state, so when tabs are switched we can retain the notification information
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1, //the current page
    notifications: [],// the actual notifications
    finishedFetching: false,
    toggler: false
}

export const contractSlice = createSlice({
    name: "spam",
    initialState,
    reducers: {
        toggleToggler: (state) => {
            state.toggler = !state.toggler;
        },
        resetState: (state) => {
            state.page = initialState.page;
            state.notifications = initialState.notifications;
            state.finishedFetching = initialState.finishedFetching;
        },
        addPaginatedNotifications: (state, action) => {
            state.notifications = [ ...state.notifications, ...action.payload ];
            state.page += 1;
        },
        incrementPage: (state) => {
            state.page += 1;
        },
        addNewNotification: (state, action) => {
            state.notifications = [{...action.payload}, ...state.notifications]
        },
        setFinishedFetching: (state) => {
            state.finishedFetching = true;
        },
        updateTopNotifications: (state, action) => {
            state.notifications = [...action.payload.notifs, ...state.notifications.slice(action.payload.pageSize)];
            console.log({sn: state.notifications});
        }
    }
});

export const {
    toggleToggler,
    addPaginatedNotifications,
    incrementPage,
    addNewNotification,
    setFinishedFetching,
    resetState,
    updateTopNotifications
} = contractSlice.actions;

export default contractSlice.reducer;