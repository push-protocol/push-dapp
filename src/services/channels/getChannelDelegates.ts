// Internal Components
import { getReq } from "api";
import { channelsServiceEndpoints } from "helpers/RoutesHelper"

// Types
type Props = {
    channelCaipAddress: string;
}

export const getChannelDelegates = async ({ channelCaipAddress }: Props) => {
    const reqEndpoint = channelsServiceEndpoints.channelDelegates(channelCaipAddress);

    try {
        const response = await getReq(reqEndpoint);
        return response?.data?.delegates;
    } catch (err) {
        throw new Error(err.message);
    }
}