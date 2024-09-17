import axios from 'axios';
import { ChannelListSortType } from '@pushprotocol/restapi';
import { appConfig } from 'config';
import { getChannelsListModelCreator } from '../../models';
import { ChannelListParams } from '../../types';

export const getChannelsList = ({ pageNumber, pageSize, order, sort }: ChannelListParams) =>
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
