// React and other libraries
import { FC, ReactNode } from 'react';

// Utility functions
import { ChannelDetails } from 'queries';

// Components
import ManageNotifSettingDropdown from 'components/dropdowns/ManageNotifSettingDropdown';
import { UserSetting } from 'helpers/channel/types';

export type UnsubscribeChannelDropdownProps = {
  children: ReactNode;
  channelDetail: ChannelDetails;
  centeronMobile?: boolean;
  onSuccess: () => void;
  userSetting?: UserSetting[] | undefined;
};

const UnsubscribeChannelDropdown: FC<UnsubscribeChannelDropdownProps> = ({
  children,
  centeronMobile = false,
  channelDetail,
  onSuccess,
  userSetting,
}) => {
  return (
    <ManageNotifSettingDropdown
      centerOnMobile={centeronMobile}
      channelDetail={channelDetail}
      userSetting={userSetting}
      onSuccessOptout={onSuccess}
    >
      {children}
    </ManageNotifSettingDropdown>
  );
};

export { UnsubscribeChannelDropdown };
