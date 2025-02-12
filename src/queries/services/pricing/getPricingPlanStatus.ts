import axios from 'axios';
import { getCustomDeliveryURL } from 'queries/baseURL';
import { getPricingPlanStatusModel } from 'queries/models';

export const getPricingPlanStatus = (payload: { channelId: string }) =>
  axios({
    method: 'GET',
    url: `${getCustomDeliveryURL()}/apis/v1/channels/${payload?.channelId}`,
  }).then((response) => getPricingPlanStatusModel(response.data));
