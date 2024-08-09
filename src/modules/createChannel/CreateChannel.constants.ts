import { ChannelCreationError, CreateChannelProgressType, createChannelStepsType } from './CreateChannel.types';

export const CHANNEL_STAKE_FEES = 50;

export const createChannelSteps: createChannelStepsType = [
  { label: 'Channel Info', value: 'channelInfo' },
  { label: 'Upload Logo', value: 'uploadLogo' },
  { label: 'Stake Fees', value: 'stakeFees' }
];

export const progressInitialState: CreateChannelProgressType = {
  progress: null,
  progressInfo: '',
  processingInfo: ''
};

export const errorInitialState: ChannelCreationError = {
  txErrorStatus: 0,
  txError: ''
};
