import axios from 'axios';

import { appConfig } from '../../../config/index';
import { getTrendingChannelsModelCreator } from 'queries/models';
import { TrendingChannelsParams } from 'queries/types/channels';

export const getTrendingChannels = ({ startDate, endDate, channel, source }: TrendingChannelsParams) =>
  axios({
    method: 'GET',
    url: `${appConfig.apiUrl}/v1/analytics/subscriber`,
    params: { startDate, endDate, channel, source },
  }).then((response) => getTrendingChannelsModelCreator(response.data));
