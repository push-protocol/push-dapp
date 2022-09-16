import { appConfig } from "config";

const apiVersion: number = appConfig.pushNodeApiVersion;
const channelsRoute: string = `/v${apiVersion}/channels`;
const usersRoute: string = `/v${apiVersion}/users`;

export const usersServiceEndpoints = {
    userSubscriptions: (userAddressInCAIP: string) => `${usersRoute}/${userAddressInCAIP}/subscriptions`
}

export const channelsServiceEndpoints = {
    channelsInfo: `${channelsRoute}/`
}