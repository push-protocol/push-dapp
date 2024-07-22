import { abis, addresses } from 'config';
import { ethers } from 'ethers';

type EditChannelPayload = {
  signer: ethers.providers.JsonRpcSigner;
  identityBytes: Uint8Array;
  fees: ethers.BigNumber;
  account: string;
};
export const editChannelDetails = async (payload: EditChannelPayload) => {
  const { signer, account, identityBytes, fees } = payload;

  // Create contract instance
  let contract = new ethers.Contract(addresses.epnscore, abis.epnscore, signer);

  const tx = await contract.updateChannelMeta(account, identityBytes, fees, {
    gasLimit: 1000000
  });

  return tx.wait();
};
