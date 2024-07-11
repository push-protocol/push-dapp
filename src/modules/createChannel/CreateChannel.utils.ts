import { abis, addresses } from 'config';
import { ethers } from 'ethers';
import { handleLogoSizeLimitation, toDataURL } from 'helpers/LogoSizeHelper';
import * as yup from 'yup';

export const channelInfoValidationSchema = yup.object().shape({
  channelName: yup.string().required('Required'),
  channelDesc: yup.string().required('Required'),
  channelURL: yup
    .string()
    .required('Required')
    .test('url', 'Invalid URL', function(value) {
      // const regex = /^(http:\/\/|https:\/\/|www\.)?([\w-]+\.)+[\w-]{2,}(\/[\w.-]*)*\/?$/;
      const urlPattern = new RegExp(
        '^((?:https|http):\\/\\/)' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
          '(\\#[-a-z\\d_]*)?$',
        'i'
      ); // validate fragment locator
      return urlPattern.test(value);
    })
});

export const isEmpty = (field: string) => {
  if (field.trim().length == 0) {
    return true;
  }
  return false;
};

export const isImageFile = (file: File) => {
  return file.type.startsWith('image/');
};

export const checkPushTokenApprovalFunc = async ({ provider, account }) => {
  let checkPushTokenApprovedAmount = new ethers.Contract(addresses.pushToken, abis.pushToken, provider);
  let value = await checkPushTokenApprovedAmount.allowance(account, addresses.epnscore);
  value = value?.toString();
  const convertedVal = ethers.utils.formatEther(value);
  console.log('Number value >>>', convertedVal, Number(convertedVal));
  return Number(convertedVal);
};

export const checkImageSize = (croppedImage, setChannelFile) => {
  console.log('Cropped Image', croppedImage);
  toDataURL(croppedImage, function(dataUrl: string) {
    const response = handleLogoSizeLimitation(dataUrl);
    if (response.success) {
      console.log('Cropped Image....', croppedImage);
      setChannelFile(croppedImage);
    }
  });
};
