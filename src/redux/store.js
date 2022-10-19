import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import adminReducer from './slices/adminSlice';
import channelCreationReducer from './slices/channelCreationSlice';
import channelReducer from './slices/channelSlice';
import contractReducer from './slices/contractSlice';
import chatReducer from "./slices/chatSlice";
import notificationReducer from './slices/notificationSlice';
import canSendNotification from "./slices/sendNotificationSlice";
import spamReducer from './slices/spamSlice';
import userJourneyReducer from './slices/userJourneySlice';

const rootReducer = combineReducers({
	contracts: contractReducer,
	channels: channelReducer,
	chat: chatReducer,
	channelCreation: channelCreationReducer,
	admin: adminReducer,
	notifications: notificationReducer,
	spam: spamReducer,
	userJourney: userJourneyReducer,
	canSend:canSendNotification,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
		immutableCheck: false
	})
});

export default store;
