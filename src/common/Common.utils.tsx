import { NotificationEvent } from '@pushprotocol/restapi';
import { LOGO_ALIAS_CHAIN } from './Common.constants';
import { networkName } from 'helpers/UtilityHelper';
import { NotificationToast } from './components';
import { notification } from 'blocks';

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

export const handleNotificationToast = (data: NotificationEvent) => {
  notification.show({
    overlay: <NotificationToast notification={data} />,
  });
  setTimeout(() => {
    notification.hide();
  }, 10000);
};
