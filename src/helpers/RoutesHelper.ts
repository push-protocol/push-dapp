// Internal Configs
import { getPreviewBasePath } from '../../basePath.js';
import { appConfig } from '../config/index.js';

// Constants
const apiVersion: number = appConfig.pushNodeApiVersion;
const channelsRoute: string = `/v${apiVersion}/channels`;
const usersRoute: string = `/v${apiVersion}/users`;
const ipfsRoute: string = `/v${apiVersion}/ipfs`;
const deliveryNodeRoute: string = `/v${apiVersion}`;

export const usersServiceEndpoints = {
  userSubscriptions: (userAddressInCAIP: string): string => `${usersRoute}/${userAddressInCAIP}/subscriptions`,
  userDelegations: (userAddressInCAIP: string): string => `${usersRoute}/${userAddressInCAIP}/delegations`,
};

export const channelsServiceEndpoints = {
  channelsInfo: (queryParams?: string): string => `${channelsRoute}?${queryParams}`,
  channelsSearch: (queryParams: string): string => `${channelsRoute}/search?${queryParams}`,
  channelDelegates: (channelAddressInCAIP: string): string => `${channelsRoute}/${channelAddressInCAIP}/delegates`,
};

export const ipfsServiceEndpoints = {
  ipfsUpload: (): string => `${ipfsRoute}/upload`,
};

export const deliveryNodeServiceEndpoints = {
  registerDeviceToken: (): string => `${deliveryNodeRoute}/pushtokens/register`,
};
export const getPublicAssetPath = (path: string) =>
  getPreviewBasePath() ? `${getPreviewBasePath()}/${path}` : `./${path}`;
