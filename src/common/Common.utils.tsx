import { appConfig } from 'config';
import { LOGO_ALIAS_CHAIN } from './Common.constants';
import { networkName } from 'helpers/UtilityHelper';
import { EnvType } from './Common.types';
import moment from 'moment';

export const allowedNetworks = appConfig.allowedNetworks.filter(
  (chain: number) => chain != appConfig.coreContractChain
);

export const getSelectChains = (chainIdList: Array<number>) => {
  return chainIdList?.map((key: number) => {
    const Component = LOGO_ALIAS_CHAIN[key];
    return {
      value: key.toString(),
      label: networkName[key as keyof typeof networkName],
      icon: <Component />,
    };
  });
};

/**
 * @param count
 * @returns returns formatted number
 */
export const formatSubscriberCount = (count?: number) => {
  if (count) {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    } else {
      return count;
    }
  } else {
    return 0;
  }
};

export const isValidURL = (str: string | undefined) => {
  if (!str) return false;
  const pattern = new RegExp(
    '^(https?:\\/\\/)' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\S*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
};

export const getCurrentEnv = (): EnvType => {
  return appConfig.appEnv;
};

export function convertTimeStamp(timestamp: string) {
  const date = moment.unix(Number(timestamp));
  const now = moment();

  const diffInSeconds = now.diff(date, 'seconds');
  const diffInMinutes = now.diff(date, 'minutes');

  if (diffInSeconds < 60) {
    return 'now';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else {
    return date.format('hh:mm A');
  }
}
