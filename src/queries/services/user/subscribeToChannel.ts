import * as PushAPI from '@pushprotocol/restapi';

import { SubscribeChannelParams, SubsribeChannelResponse } from 'queries/types';

export const subscribeToChannel = async ({
  signer,
  channelAddress,
  userAddress,
  settings,
  env
}: SubscribeChannelParams): Promise<SubsribeChannelResponse> => {
  const res = await PushAPI.channels.subscribeV2({
    signer: signer,
    channelAddress: channelAddress, // channel address in CAIP
    userAddress: userAddress, // user address in CAIP
    settings: settings,
    env
  });
  return res;
};
