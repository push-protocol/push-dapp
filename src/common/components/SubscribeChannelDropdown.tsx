// React and other libraries
import { FC, ReactNode } from 'react';

// Utility functions
import { ChannelDetails } from 'common';

// Components
import OptinNotifSettingDropdown from 'components/dropdowns/OptinNotifSettingDropdown';

export type SubscribeChannelDropdownProps = {
  children: ReactNode;
  channelDetails: ChannelDetails;
  onSuccess: () => void;
};

const SubscribeChannelDropdown: FC<SubscribeChannelDropdownProps> = (options) => {
  const { children, channelDetails, onSuccess } = options;

  return (
    <OptinNotifSettingDropdown
      channelDetail={channelDetails}
      setLoading={() => {
        //empty function
      }}
      onSuccessOptin={onSuccess}
    >
      {children}
    </OptinNotifSettingDropdown>
  );
};

export { SubscribeChannelDropdown };
