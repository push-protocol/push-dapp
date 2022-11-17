// Internal Components
import { postReq } from "api";
import { ipfsServiceEndpoints } from "helpers/RoutesHelper";

// Types
type Props = {
    input: string
}

export const ipfsUpload = async ({ input }: Props) => {
    const reqEndpoint = ipfsServiceEndpoints.ipfsUpload();

    try {
        const response = await postReq(reqEndpoint, {
            data: input
        });
        return response?.data?.cid;
    } catch (err) {
        throw new Error(err.message);
    }
}