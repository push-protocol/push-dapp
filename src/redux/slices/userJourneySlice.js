/**
 * This file helps us to maintain the state of the user journey tutorial
 */
 import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
   run: false,
   stepIndex: 0,
   welcomeNotifs: [],// only welcome notifications
   tutorialContinous: false,
   isCommunicateOpen: false,
   isDeveloperOpen: false,
 };
 
 export const userJourneySlice = createSlice({
     name: "tutorial",
     initialState,
     reducers: {
         incrementStepIndex: (state) => {
             state.stepIndex += 1;
         },
         decrementStepIndex: (state) => {
           if (state.stepIndex > 0)
             state.stepIndex -= 1;
         },
         setRun: (state, action) => {
             state.run = action.payload;
         },
         setIndex: (state, action) => {
           state.stepIndex = action.payload;
         },
         addNewWelcomeNotif: (state, action) => {
             state.welcomeNotifs = [{...action.payload}, ...state.welcomeNotifs]
         },
         setWelcomeNotifsEmpty: (state) => {
             state.welcomeNotifs = [];
         },
         setTutorialContinous: (state, action) => {
             state.tutorialContinous = action.payload;
             },
         setCommunicateOpen: (state, action) => {
             state.isCommunicateOpen = action.payload;
             },
            setDeveloperOpen: (state, action) => {
                state.isDeveloperOpen = action.payload;
            },
     }
 });
 
 export const {
     incrementStepIndex,
     decrementStepIndex,
     setRun,
     setIndex,
     addNewWelcomeNotif,
     setWelcomeNotifsEmpty,
     setTutorialContinous,
     setCommunicateOpen,
    setDeveloperOpen
 } = userJourneySlice.actions;
 
 export default userJourneySlice.reducer;