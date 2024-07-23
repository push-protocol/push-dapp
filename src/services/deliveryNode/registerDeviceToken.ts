// Internal Components
import { deliveryNodePostReq } from 'api';
import { convertAddressToPartialCaip } from 'helpers/CaipHelper';
import { deliveryNodeServiceEndpoints } from 'helpers/RoutesHelper';

// Types
type Props = {
  token: string;
  account: string;
};

export const registerDeviceToken = async ({ token, account }: Props) => {
  const reqEndpoint = deliveryNodeServiceEndpoints.registerDeviceToken();
  try {
    const data = {
      wallet: convertAddressToPartialCaip(account.toLowerCase()),
      device_token: token,
      platform: 'web',
    };
    const response = await deliveryNodePostReq(reqEndpoint, data);
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};
