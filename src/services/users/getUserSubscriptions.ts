// Internal Components
import { getReq } from "api";
import { usersServiceEndpoints } from "helpers/RoutesHelper"

// Types
type Props = {
    userCaipAddress: string;
}

export const getUserSubscriptions = async ({ userCaipAddress }: Props) => {
    const reqEndpoint = usersServiceEndpoints.userSubscriptions(userCaipAddress);

    try {
        const response = await getReq(reqEndpoint);
        return response?.data?.subscriptions;
    } catch (err) {
        throw new Error(err.message);
    }
}