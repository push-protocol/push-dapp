import { getReq } from "api";
import { usersServiceEndpoints } from "helpers/RoutesHelper"

type Props = {
    userCaipAddress: string;
}

export const getUserDelegations = async ({ userCaipAddress }: Props) => {
    const reqEndpoint = usersServiceEndpoints.userDelegations(userCaipAddress);

    try {
        const response = await getReq(reqEndpoint);
        return response?.data?.delegations;
    } catch (err) {
        throw new Error(err.message);
    }
}