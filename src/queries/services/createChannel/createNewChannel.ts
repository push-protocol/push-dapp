import { abis, addresses } from 'config';
import { ContractReceipt, ethers } from 'ethers';
import { CreateNewChannelPayload } from 'queries/types';

export const createNewChannel = async (payload: CreateNewChannelPayload): Promise<ContractReceipt> => {
  const { channelType, identityBytes, fees, signer } = payload;

  let timestampIfTimebound = 0;
  // Create contract instance
  let contract = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);

  // Call contract function
  const tx = await contract.createChannelWithPUSH(channelType, identityBytes, fees, timestampIfTimebound, {
    gasLimit: 600000
  });

  return tx.wait();
};
