export type ChannelInfoFormValues = {
  channelName: string;
  channelDesc: string;
  channelURL: string;
};

export type UploadLogoFormValues = {
  image: null;
  imageSrc: string;
  imageType: string;
};

export type CreateChannelProgressType = {
  progress: number | null;
  progressInfo: string;
  processingInfo: string;
};

export type ChannelCreationError = {
  txErrorStatus: number;
  txError: string;
};

export type CreateChannelStepIndex = 'channel_info' | 'upload_logo' | 'stake_fees';
