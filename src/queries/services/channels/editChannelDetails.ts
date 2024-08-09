import { ethers } from 'ethers';
import { abis, addresses } from 'config';
import { EditChannelPayload } from 'queries/types';

export const editChannelDetails = async (payload: EditChannelPayload) => {
  const { signer, account, identityBytes, fees } = payload;

  // Create contract instance
  let contract = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);

  const tx = await contract.updateChannelMeta(account, identityBytes, fees, {
    gasLimit: 1000000
  });

  return tx.wait();
};
