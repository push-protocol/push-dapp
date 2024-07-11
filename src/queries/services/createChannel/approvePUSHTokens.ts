import { abis, addresses } from 'config';
import { ContractReceipt, ethers } from 'ethers';

type ApprovePUSHTokenPayload = {
  noOfTokenToApprove: ethers.BigNumber;
  signer: ethers.providers.JsonRpcSigner;
};

export const approvePUSHTokens = async (payload: ApprovePUSHTokenPayload): Promise<ContractReceipt> => {
  const { noOfTokenToApprove, signer } = payload;

  // Create contract instance
  let pushTokenContract = new ethers.Contract(addresses.pushToken, abis.pushToken, signer);

  // Call contract function
  const tx = await pushTokenContract.approve(addresses.epnscore, noOfTokenToApprove);

  return tx.wait();
};
