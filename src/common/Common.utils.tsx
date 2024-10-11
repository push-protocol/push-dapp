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
