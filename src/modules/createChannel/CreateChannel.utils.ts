import { abis, addresses } from 'config';
import { ethers } from 'ethers';

export const isEmpty = (field: string) => {
  if (field.trim().length == 0) {
    return true;
  }
  return false;
};

export const checkApprovePushTokens = async ({ provider, account }) => {
  let checkPushTokenApprovedAmount = new ethers.Contract(addresses.pushToken, abis.pushToken, provider);
  let value = await checkPushTokenApprovedAmount.allowance(account, addresses.epnscore);
  value = value?.toString();
  const convertedVal = ethers.utils.formatEther(value);
  return Number(convertedVal);
};
