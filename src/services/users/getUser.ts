// External Packages
import * as PushAPI from "@pushprotocol/restapi"
import { User } from "types/chat";


//Internal Configs
import { appConfig } from "config";



export const getUser = async (account: string) => {
    try {
    const user: User = await PushAPI.user.get({ account, env:appConfig.appEnv});
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
}