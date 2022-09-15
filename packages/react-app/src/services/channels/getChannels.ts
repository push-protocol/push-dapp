import { getReq } from "api";
import { channelsServiceEndpoints } from "helpers/RoutesHelper"

export const getChannels = async () => {
    const reqEndpoint = channelsServiceEndpoints.channelsInfo;

    try {
        const response = await getReq(reqEndpoint);
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
}