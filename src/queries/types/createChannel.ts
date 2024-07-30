import { ethers } from 'ethers';

export type CreateNewChannelPayload = {
  channelType: number;
  identityBytes: string;
  fees: ethers.BigNumber;
  signer: ethers.providers.JsonRpcSigner;
};

export type ApprovePUSHTokenPayload = {
  noOfTokenToApprove: ethers.BigNumber;
  signer: ethers.providers.JsonRpcSigner;
};
