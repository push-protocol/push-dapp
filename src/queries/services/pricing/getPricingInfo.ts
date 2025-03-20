import axios from 'axios';
import { getCustomDeliveryURL } from 'queries/baseURL';
import { getPricingInfoModel } from 'queries/models';

export const getPricingInfo = () =>
  axios({
    method: 'GET',
    url: `${getCustomDeliveryURL()}/apis/v1/pricings`,
  }).then((response) => getPricingInfoModel(response.data));
