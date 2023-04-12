// External Packages
import * as PushAPI from "@pushprotocol/restapi"


//Internal Configs
import { appConfig } from "config";
import { spaces } from "./spaceList";


//add sdk call for spaces
export const getSpaceRequests = async (account: string) => {
    try {
        return spaces;
    } catch (err) {
        throw new Error(err.message);
    }
}