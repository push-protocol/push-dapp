import { LOGO_ALIAS_CHAIN } from 'common';
import { appConfig } from 'config';
import { networkName } from 'helpers/UtilityHelper';

export const getSelectChains = () => {
  return appConfig.allowedNetworks.map((key: number) => {
    const Component = LOGO_ALIAS_CHAIN[key];
    return {
      value: key.toString(),
      label: networkName[key as keyof typeof networkName],
      icon: <Component />,
    };
  });
};
