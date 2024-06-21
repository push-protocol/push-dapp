export type RewardsAcitivitesResponse = {
  activities: Activity[];
  total: number;
  page: number;
  size: number;
};

export type Activity = {
  id: string;
  activityType: string;
  activityTitle: string;
  activityDesc: string;
  points: number;
  multiplier: number;
  expiryType: number;
};

export type UsersAllActivitiesResponse = {
  activities: UsersActivity[];
  total: number;
  page: number;
  size: number;
};

export type UsersActivity = {
  activityId: string;
  userId: string;
  activityTypeId: string;
  data: { twitter?: string; discord?: string };
  status: 'COMPLETED';
  points: number;
  multiplier: number;
  verificationProof: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

export type DiscordDetails = {
  id: string;
  username: string;
  avatar: null | string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: null | string;
  accent_color: null | string;
  global_name: string;
  avatar_decoration_data: null | object;
  banner_color: null | string;
  clan: null | object;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
};
