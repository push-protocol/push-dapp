import axios from 'axios';
import { ethers } from 'ethers';
import { getRewardsBaseURL } from 'queries/baseURL';
import { getPVUsersModelCreator } from 'queries/models';
import { PointsVaultSearchPayload } from 'queries/types';

export const getPVSearchResults = async ({ query, token, page, pageSize }: PointsVaultSearchPayload) => {
  const queryKey = ethers.utils.isAddress(query) ? 'wallet' : 'twitter';

  return axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/activities/list?page=${page}&pageSize=${pageSize}&${queryKey}=${query}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ?? '',
    },
  }).then((response) => getPVUsersModelCreator(response.data));
};
