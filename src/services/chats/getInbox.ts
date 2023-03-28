// External Packages
import * as PushAPI from "@pushprotocol/restapi"


//Internal Configs
import { appConfig } from "config";
import { Feeds } from "types/chat";



export const getInbox = async (account: string) => {
    try {
        const inboxes:Feeds[] = await PushAPI.chat.chats({ account: account!, env: appConfig.appEnv, toDecrypt: false });
        return inboxes;
    } catch (err) {
        throw new Error(err.message);
    }
}
