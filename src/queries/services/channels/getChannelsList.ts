import axios from 'axios';

import { getChannelsListModelCreator } from '../../models';
import { ChannelsListParams } from 'queries/types';
import { ChannelListSortType } from '@pushprotocol/restapi';
import { appConfig } from 'config';

export const getChannelsList = ({ pageNumber, pageSize, order, sort }: ChannelsListParams) =>
  axios({
    method: 'GET',
    url: `${appConfig.apiUrl}/v1/channels`,
    params: {
      order: order || 'desc',
      limit: pageSize || 20,
      page: pageNumber || 1,
      sort: sort || ChannelListSortType.SUBSCRIBER,
    },
  }).then((response) => getChannelsListModelCreator(response.data));
