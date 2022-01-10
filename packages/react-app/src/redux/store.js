import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import contractReducer from './slices/contractSlice';
import channelReducer from './slices/channelSlice';
import adminReducer from './slices/adminSlice';
import notificationReducer from './slices/notificationSlice';
import spamReducer from './slices/spamSlice';

const rootReducer = combineReducers({
	contracts: contractReducer,
    channels: channelReducer,
    admin: adminReducer,
	notifications: notificationReducer,
	spam: spamReducer
});

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
		immutableCheck: false
	})
});

export default store;