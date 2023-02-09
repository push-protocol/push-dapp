import { Provider } from '@ethersproject/providers';
import { abis, addresses } from 'config';
import { BigNumber, ethers, Signer } from 'ethers';

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
    console.log(err.message);
  }
};

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
    console.log(err);
    throw err;
    // return false;
  }
};
