import axios from 'axios';
import { getRewardsBaseURL } from 'queries/baseURL';
import { getPVUsersModelCreator } from 'queries/models';
import { PointsVaultGetUsersPayload } from 'queries/types';

export const getPointsVaultUsers = ({ page, status, pageSize, token }: PointsVaultGetUsersPayload) =>
  axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/activities/list?status=${status.toUpperCase()}&page=${page}&pageSize=${pageSize}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ?? '',
    },
  }).then((response) => getPVUsersModelCreator(response.data));
