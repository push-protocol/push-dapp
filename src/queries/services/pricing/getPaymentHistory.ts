import axios from 'axios';
import { getCustomDeliveryURL } from 'queries/baseURL';
import { getPaymentHistoryModel } from 'queries/models';

export const getPaymentHistory = (payload: { channelId: string }) =>
  axios({
    method: 'GET',
    url: `${getCustomDeliveryURL()}/apis/v1/channels/payments/${payload?.channelId}`,
  }).then((response) => getPaymentHistoryModel(response.data));
