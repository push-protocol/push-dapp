import { IUserSliceState } from 'redux/slices/userSlice';

export type SnoozeDurationType = {
  enabled: boolean;
  hrsLeft: number;
};

export type UserStoreType = {
  user: IUserSliceState;
};
