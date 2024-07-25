import { LOGO_ALIAS_CHAIN } from './Common.constants';
import { networkName } from 'helpers/UtilityHelper';

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
