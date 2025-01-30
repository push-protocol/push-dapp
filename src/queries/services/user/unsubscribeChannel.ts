import * as PushAPI from '@pushprotocol/restapi';

import { UnsubscribeChannelParams, UnsubscribeChannelResponse } from 'queries/types';

export const unsubscribeChannel = async ({
  signer,
  channelAddress,
  userAddress,
  env,
  decryptedPGPKeys,
}: UnsubscribeChannelParams): Promise<UnsubscribeChannelResponse> => {
  const res = await PushAPI.channels.unsubscribeV2({
    signer: signer,
    channelAddress: channelAddress, // channel address in CAIP
    userAddress: userAddress, // user address in CAIP
    env,
    pgpPrivateKey: decryptedPGPKeys,
  });
  return res;
};
