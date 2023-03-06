// React + Web3 Essentials
import { utils } from 'ethers';

export const isLengthValid = (data: string, upperLen?: number,lowerLen?:number): boolean => {
    lowerLen = lowerLen?? 1;
    return ((data.length >= lowerLen) && (data.length <= upperLen));
  };
  
  export const isValidUrl = (urlString: string): boolean => {
    var urlPattern = new RegExp(
      '^((?:https|http):\\/\\/)' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };
  
  export const isValidAddress = (address: string): boolean => {
    return utils.isAddress(address);
  }
  // Disable the browser notification on Metamask iphone mobile
export const isUserAgentIphone = (userAgent:any):boolean => {
    return userAgent.indexOf('iPhone') !== -1;
  };