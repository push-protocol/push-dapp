import axios from 'axios';

import { appConfig } from 'config';
import { ChannelSearchParams } from '../../types';
import { channelSearchModelCreator } from 'queries/models';

export const channelSearch = ({ page, pageSize, query }: ChannelSearchParams) =>
  axios({
    method: 'GET',
    url: `${appConfig.apiUrl}/v1/channels/search`,
    params: { page, limit: pageSize, query },
  }).then((response) => channelSearchModelCreator(response.data));
