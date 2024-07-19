import { ChannelCreationError, CreateChannelProgressType, createChannelStepsType } from './CreateChannel.types';

export const CHANNEL_STAKE_FEES = 50;

export const createChannelSteps: createChannelStepsType = [
  { label: 'Channel Info', key: 'channel_info' },
  { label: 'Upload Logo', key: 'upload_logo' },
  { label: 'Stake Fees', key: 'stake_fees' },
];

export const progressInitialState: CreateChannelProgressType = {
  progress: null,
  progressInfo: '',
  processingInfo: '',
};

export const errorInitialState: ChannelCreationError = {
  txErrorStatus: 0,
  txError: '',
};
