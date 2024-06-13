import ManageNotifSettingDropdown from 'components/dropdowns/ManageNotifSettingDropdown';
import { ChannelDetailsProps } from 'modules/dashboard/configs/DashboardFeaturedChannels.config';
import { FC, ReactNode } from 'react';
import { UserSetting } from 'helpers/channel/types';
import { ChannelDetailsResponse } from 'queries';

interface UnsubscribeChannelDropdownProps {
  children: ReactNode;
  channelDetail: ChannelDetailsResponse;
  centeronMobile?: boolean;
  onSuccess: () => void;
  // setSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
  // setSubscriberCount: React.Dispatch<React.SetStateAction<number>>;
  userSetting: UserSetting[] | undefined;
}

const UnsubscribeChannelDropdown: FC<UnsubscribeChannelDropdownProps> = (options) => {
  const { children, centeronMobile = false, channelDetail, onSuccess, userSetting } = options;

  console.log('Center on Mpbile', centeronMobile);

  return (
    <ManageNotifSettingDropdown
      centerOnMobile={centeronMobile}
      channelDetail={channelDetail}
      userSetting={userSetting}
      onSuccessOptout={() => {
        onSuccess();
      }}
    >
      {children}
    </ManageNotifSettingDropdown>
  );
};

export default UnsubscribeChannelDropdown;
