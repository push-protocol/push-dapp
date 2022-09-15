import { envConfig } from "@project/contracts";

const apiVersion: number = envConfig.pushNodeApiVersion;
const channelsRoute: string = `/v${apiVersion}/channels`;
const usersRoute: string = `/v${apiVersion}/users`;

export const usersServiceEndpoints = {
    userSubscriptions: (userAddressInCAIP: string) => `${usersRoute}/${userAddressInCAIP}/subscriptions`
}

export const channelsServiceEndpoints = {
    channelsInfo: `${channelsRoute}/`
}