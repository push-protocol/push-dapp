import axios from 'axios';

import { getChannelsListModelCreator } from '../../models';
import { ChannelListParams } from '../../types';
import { appConfig } from 'config';

export const getChannelsList = ({ page, pageSize, order, sort, chain, tag }: ChannelListParams) =>
  axios({
    method: 'GET',
    url: `${appConfig.apiUrl}/v1/channels`,
    params: { page, limit: pageSize, order, sort, ...(chain ? { filter: chain } : {}), ...(tag ? { tag } : {}) },
  }).then((response) => getChannelsListModelCreator(response.data));
