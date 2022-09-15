import { envConfig } from "@project/contracts";

const apiVersion = envConfig.pushNodeApiVersion;
const channelsRoute = `/v${apiVersion}/channels`;
const usersRoute = `/v${apiVersion}/users`;

export const usersServiceEndpoints = {
    userSubscriptions: (userAddressInCAIP: string) => `${usersRoute}/${userAddressInCAIP}/subscriptions`
}

export const channelsServiceEndpoints = {
    channelsInfo: `${channelsRoute}/`
}