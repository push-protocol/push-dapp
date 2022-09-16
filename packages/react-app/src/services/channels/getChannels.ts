import { getReq } from "api";
import { channelsServiceEndpoints } from "helpers/RoutesHelper"

type Props = {
    page?: number,
    limit?: number,
    sort?: 'subscribers',
    order?: 'asc' | 'desc'
}

export const getChannels = async ({ page=1, limit=10, sort="subscribers", order="desc" }: Props) => {
    const queryParams = `page=${page}&limit=${limit}&sort=${sort}&order=${order}`;
    const reqEndpoint = channelsServiceEndpoints.channelsInfo(queryParams);

    try {
        const response = await getReq(reqEndpoint);
        return response?.data?.channels;
    } catch (err) {
        throw new Error(err.message);
    }
}