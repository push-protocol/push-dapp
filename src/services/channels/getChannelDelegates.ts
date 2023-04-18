// Internal Components
import * as PushAPI from "@pushprotocol/restapi";
import { appConfig } from "config";

// Types
type Props = {
    channelCaipAddress: string;
}

export const getChannelDelegates = async ({ channelCaipAddress }: Props) => {
    try {
        const response = await PushAPI.channels.getDelegates({channel:channelCaipAddress,env:appConfig.appEnv})
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
}