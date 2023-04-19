// External Packages
import * as PushAPI from "@pushprotocol/restapi"


//Internal Configs
import { appConfig } from "config";
import { spaces } from "./spaceList";


//add sdk call for spaces
export const getSpaceData = async (url: string) => {
    try {
        return spaces[0];
    } catch (err) {
        throw new Error(err.message);
    }
}