import axios from 'axios';
import { getCustomDeliveryURL } from 'queries/baseURL';
import { handleInitiatePaymentModel } from 'queries/models';

export const handleInitiatePayment = (payload: any) =>
  axios({
    method: 'POST',
    url: `${getCustomDeliveryURL()}/apis/v1/payments/initiate/`,
    data: {
      channel: payload.channel,
      pricingPlanId: payload.pricingPlanId,
      currency: payload.currency,
      network: payload.network,
      email: payload.email,
      verificationProof: payload.verificationProof,
      duration: payload.duration,
    },
  }).then((response) => handleInitiatePaymentModel(response.data));
