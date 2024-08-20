import { ethers } from 'ethers';
import { deactivateChannelParams } from 'queries/types';
import { abis, addresses } from 'config';

export const deactivateChannel = async ({ signer }: deactivateChannelParams) => {
  let contract = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);

  const tx = await contract.deactivateChannel();

  return tx.wait();
};
