import axios from 'axios';

import { appConfig } from 'config';
import { getChannelCategoriesModelledCreator } from 'queries';

export const getChannelCategories = () =>
  axios({
    method: 'GET',
    url: `${appConfig.apiUrl}/v1/channels/tags/all`,
  }).then((response) => getChannelCategoriesModelledCreator(response.data));
