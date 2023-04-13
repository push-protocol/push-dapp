// Internal Components
import * as PushAPI from "@pushprotocol/restapi";
import { appConfig } from "config";

// Types
type Props = {
    userCaipAddress: string;
}

export const getUserDelegations = async ({ userCaipAddress }: Props) => {
    try {
        const response = await PushAPI.user.getDelegations({user:userCaipAddress,env:appConfig.appEnv})
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
}