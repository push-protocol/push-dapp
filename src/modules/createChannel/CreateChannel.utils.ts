import { abis, addresses } from 'config';
import { ethers } from 'ethers';
import { handleLogoSizeLimitation, toDataURL } from 'helpers/LogoSizeHelper';

export const isEmpty = (field: string) => {
  if (field.trim().length == 0) {
    return true;
  }
  return false;
};

export const isImageFile = (file: File) => {
  return file.type.startsWith('image/');
};

// Monalisha to add types here
// @ts-expect-error
export const checkApprovePushTokens = async ({ provider, account }) => {
  let checkPushTokenApprovedAmount = new ethers.Contract(addresses.pushToken, abis.pushToken, provider);
  let value = await checkPushTokenApprovedAmount.allowance(account, addresses.epnscore);
  value = value?.toString();
  const convertedVal = ethers.utils.formatEther(value);
  return Number(convertedVal);
};

export const checkImageSize = (croppedImage: string) => {
  toDataURL(croppedImage, function (dataUrl: string) {
    const response = handleLogoSizeLimitation(dataUrl);
    if (response.success) {
      return true;
    } else {
      return false;
    }
  });
};
