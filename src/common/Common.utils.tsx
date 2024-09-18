import { appConfig } from 'config';
import { LOGO_ALIAS_CHAIN } from './Common.constants';
import { networkName } from 'helpers/UtilityHelper';

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
