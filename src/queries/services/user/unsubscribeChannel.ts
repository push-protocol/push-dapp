import * as PushAPI from '@pushprotocol/restapi';

import { UnsubscribeChannelParams, UnsubscribeChannelResponse } from 'queries/types';

export const unsubscribeChannel = async ({
  signer,
  channelAddress,
  userAddress,
  env
}: UnsubscribeChannelParams): Promise<UnsubscribeChannelResponse> => {
  const res = await PushAPI.channels.unsubscribe({
    signer: signer,
    channelAddress: channelAddress, // channel address in CAIP
    userAddress: userAddress, // user address in CAIP
    env
  });
  return res;
};
