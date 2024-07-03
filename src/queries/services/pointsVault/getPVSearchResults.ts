import axios from 'axios';
import { ethers } from 'ethers';
import { getRewardsBaseURL } from 'queries/baseURL';
import { getPVUsersModelCreator } from 'queries/models';
import { PointsVaultSearchPayload } from 'queries/types';

export const getPVSearchResults = async ({ query, token, page, pageSize, status }: PointsVaultSearchPayload) => {
  const isAddress = ethers.utils.isAddress(query);
  const queryKey = isAddress ? 'wallet' : 'twitter';
  const queryValue = isAddress ? `eip155:${query}` : query;

  return axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/activities/list?status=${status?.toUpperCase()}&page=${page}&pageSize=${pageSize}&${queryKey}=${queryValue}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ?? '',
    },
  }).then((response) => getPVUsersModelCreator(response.data));
};
