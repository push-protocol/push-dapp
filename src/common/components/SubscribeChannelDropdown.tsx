import OptinNotifSettingDropdown from 'components/dropdowns/OptinNotifSettingDropdown';
import { ChannelDetailsProps } from 'modules/dashboard/configs/DashboardFeaturedChannels.config';
import { ChannelDetailsResponse } from 'queries';
import { FC, ReactNode } from 'react';

interface SubscribeChannelDropdownProps {
  children: ReactNode;
  channelDetails: ChannelDetailsResponse;
  onSuccess: () => void;
}

const SubscribeChannelDropdown: FC<SubscribeChannelDropdownProps> = (options) => {
  const { children, channelDetails, onSuccess } = options;

  return (
    <OptinNotifSettingDropdown
      channelDetail={channelDetails}
      setLoading={() => {
        //empty function
      }}
      onSuccessOptin={() => onSuccess()}
    >
      {children}
    </OptinNotifSettingDropdown>
  );
};

export default SubscribeChannelDropdown;
