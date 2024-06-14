// React and other libraries
import { FC, ReactNode } from 'react';

// Utility functions
import { ChannelDetailsResponse } from 'queries';

// Components
import OptinNotifSettingDropdown from 'components/dropdowns/OptinNotifSettingDropdown';

interface SubscribeChannelDropdownProps {
  children: ReactNode;
  channelDetails: ChannelDetailsResponse;
  setLoading: (value: boolean) => void;
  onSuccess: () => void;
}

const SubscribeChannelDropdown: FC<SubscribeChannelDropdownProps> = ({
  children,
  channelDetails,
  setLoading,
  onSuccess
}) => {

  return (
    <OptinNotifSettingDropdown
      channelDetail={channelDetails}
      setLoading={setLoading}
      onSuccessOptin={() => onSuccess()}
    >
      {children}
    </OptinNotifSettingDropdown>
  );
};

export { SubscribeChannelDropdown };
