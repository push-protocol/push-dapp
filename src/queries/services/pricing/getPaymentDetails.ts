import axios from 'axios';
import { getCustomDeliveryURL } from 'queries/baseURL';
import { getPaymentDetailsModel } from 'queries/models';

export const getPaymentDetails = (payload: { paymentId: string }) =>
  axios({
    method: 'GET',
    url: `${getCustomDeliveryURL()}/apis/v1/payments/${payload?.paymentId}`,
  }).then((response) => getPaymentDetailsModel(response.data));
