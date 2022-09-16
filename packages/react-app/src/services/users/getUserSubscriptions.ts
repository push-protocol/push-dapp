import { getReq } from "api";
import { usersServiceEndpoints } from "helpers/RoutesHelper"

export const getUserSubscriptions = async (userCaipAddress: string) => {
    const reqEndpoint = usersServiceEndpoints.userSubscriptions(userCaipAddress);

    try {
        const response = await getReq(reqEndpoint);
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
}