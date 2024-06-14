// React and other libraries
import { FC, ReactNode } from 'react';

// Utility functions
import { ChannelDetailsResponse } from 'queries';

// Components
import ManageNotifSettingDropdown from 'components/dropdowns/ManageNotifSettingDropdown';
import { UserSetting } from 'helpers/channel/types';

interface UnsubscribeChannelDropdownProps {
  children: ReactNode;
  channelDetail: ChannelDetailsResponse;
  centeronMobile?: boolean;
  onSuccess: () => void;
  userSetting: UserSetting[] | undefined;
}

const UnsubscribeChannelDropdown: FC<UnsubscribeChannelDropdownProps> = ({
  children,
  centeronMobile = false,
  channelDetail,
  onSuccess,
  userSetting
}) => {

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

export { UnsubscribeChannelDropdown };
