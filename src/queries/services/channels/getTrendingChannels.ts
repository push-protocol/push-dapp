import axios from 'axios';

import { appConfig } from 'config';
import { getTrendingChannelsModelCreator } from '../../models';
import { TrendingChannelsParams } from '../../types';

export const getTrendingChannels = ({ startDate, endDate, channel, source }: TrendingChannelsParams) =>
  axios({
    method: 'GET',
    url: `${appConfig.apiUrl}/v1/analytics/subscriber`,
    params: { startDate, endDate, channel, source },
  }).then((response) => getTrendingChannelsModelCreator(response.data));
