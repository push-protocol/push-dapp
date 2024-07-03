import axios from 'axios';
import { getRewardsBaseURL } from 'queries/baseURL';
import { getUserTwitterDetailsModelCreator } from 'queries/models';
import { UserTwitterDetailsPayload } from 'queries/types';

export const getUserTwitterDetails = ({ twitterHandle, token }: UserTwitterDetailsPayload) =>
  axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/twitter/user/${twitterHandle}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then((response) => getUserTwitterDetailsModelCreator(response.data));
