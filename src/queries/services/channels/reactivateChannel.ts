import { ethers } from 'ethers';
import { reactivateChannelParams } from 'queries/types';
import { abis, addresses } from 'config';

export const reactivateChannel = async ({ fees, signer }: reactivateChannelParams) => {
  let contract = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);

  const tx = await contract.reactivateChannel(fees);

  return tx.wait();
};
