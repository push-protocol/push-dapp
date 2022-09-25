import { getReq } from "api";
import { channelsServiceEndpoints } from "helpers/RoutesHelper";

type Props = {
    page?: number,
    limit?: number,
    order?: 'asc' | 'desc',
    query: string
}

export const getChannelsSearch = async ({ page=1, limit=10, order="desc", query }: Props) => {
    const queryParams = `page=${page}&limit=${limit}&order=${order}&query=${query}`;
    const reqEndpoint = channelsServiceEndpoints.channelsSearch(queryParams);

    try {
        const response = await getReq(reqEndpoint);
        return response?.data?.channels;
    } catch (err) {
        throw new Error(err.message);
    }
}