import { ethers } from 'ethers';
import { addChannelSubgraphParams } from 'queries/types';
import { abis, addresses } from 'config';

export const addChannelSubgraph = async ({ identityBytes, signer }: addChannelSubgraphParams) => {
  let contract = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);

  const tx = await contract.addSubGraph(identityBytes);

  return tx.wait();
};
