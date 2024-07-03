import axios from 'axios';
import { getRewardsBaseURL } from '../../baseURL';
import { PointsVaultUserLoginProps } from '../../types';
import { pointsVaultUserLoginModelCreator } from '../../models';

export const pointsVaultUserLogin = (payload: PointsVaultUserLoginProps) =>
  axios({
    method: 'POST',
    url: `${getRewardsBaseURL()}/auth/login`,
    data: {
      username: payload.username,
      password: payload.password,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => pointsVaultUserLoginModelCreator(response.data));
