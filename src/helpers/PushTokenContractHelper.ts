import { Provider } from '@ethersproject/providers';
import { abis, addresses } from 'config';
import { BigNumber, ethers, Signer } from 'ethers';
// import {ConnectorUpdate} from "@web3-react/types";

type PushTokenApprovalAmountType = {
  address: string;
  provider: Provider;
  contractAddress: string;
};
export const getPushTokenApprovalAmount = async ({
  address,
  provider,
  contractAddress,
}: PushTokenApprovalAmountType): Promise<string> => {
  try {
    const pushTokenContract = new ethers.Contract(addresses.pushToken, abis.pushToken, provider);
    
    const allowanceAmount: BigNumber = await pushTokenContract.allowance(address, contractAddress);
    const allowanceAmountStr = ethers.utils.formatEther(allowanceAmount.toString());
    return allowanceAmountStr;
  } catch (err) {
    console.error(err.message);
  }
};

type HasEnoughPushToken = {
  address: string;
  provider: Provider;
  noOfPushTokensToCheck: number;
};
export const getHasEnoughPushToken = async ({
  address,
  provider,
  noOfPushTokensToCheck,
}: HasEnoughPushToken): Promise<boolean> => {
  try {
    const pushTokenContract = new ethers.Contract(addresses.pushToken, abis.pushToken, provider);
    
    const ownedPushToken: BigNumber = await pushTokenContract.balanceOf(address);
    const ownedPushTokenNum = +ethers.utils.formatEther(ownedPushToken.toString());
    return ownedPushTokenNum>=noOfPushTokensToCheck;
  } catch (err) {
    console.error(err.message);
  }
};

type PushTokenFromWallet = {
  address: string;
  provider: Provider;
};

export const getPushTokenFromWallet = async({
  address,
  provider,
}: PushTokenFromWallet ): Promise<number> =>{
  try {
    const pushTokenContract = new ethers.Contract(addresses.pushToken, abis.pushToken, provider);
    
  const ownedPushToken: BigNumber = await pushTokenContract.balanceOf(address);
  const ownedPushTokenNum = +ethers.utils.formatEther(ownedPushToken.toString());
  return ownedPushTokenNum;
  } catch (err) {
    console.error(err.message);
  }

  
}

type PushTokenApproveType = {
  signer: Signer;
  contractAddress: string;
  amount: number;
};
export const approvePushToken = async ({ signer, contractAddress, amount }: PushTokenApproveType): Promise<boolean> => {
  try {
    const pushTokenContract = new ethers.Contract(addresses.pushToken, abis.pushToken, signer);

    const parsedAmount = ethers.utils.parseUnits(amount.toString(), 18);
    const tx = await pushTokenContract.approve(contractAddress, parsedAmount);
    await tx.wait();
    return true;
  } catch (err) {
    console.error(err);
    throw err;
    // return false;
  }
};

type ImportPushTokenType = {
  provider: any
}
export const importPushToken = async ({ provider }: ImportPushTokenType): Promise<boolean> =>{
  try {
    const name = "Ethereum Push Notification Service";
    const symbol = "PUSH";
    const decimals = 18;

    await provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: addresses.pushToken,
          symbol: symbol,
          decimals: decimals
        },
      },
    })
    return true;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

type MintPushTokenType = {
  noOfTokens: number,
  provider: any,
  account: any,
}
export const mintPushToken = async ({noOfTokens, provider, account}:MintPushTokenType)=>{
  try {
    var signer = provider.getSigner(account);
    let pushTokenContract = new ethers.Contract(addresses.pushToken, abis.pushToken, signer);
    console.info({
      pushTokenContract,
    });
    console.info(1);
    let pushTokenAmount = noOfTokens;
    const amount = ethers.utils.parseUnits(pushTokenAmount.toString(), 18);
    console.info(amount);
    var mintTransactionPromise = pushTokenContract.mint(amount);
    console.info(3);
    const tx = await mintTransactionPromise;
    console.info(tx);
    await provider.waitForTransaction(tx.hash);
    console.info(4);

    console.info("Transaction Completed");
    return (noOfTokens);
  } catch (err) {
    console.error(err);
  }
}
