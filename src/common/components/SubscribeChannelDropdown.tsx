import OptinNotifSettingDropdown from 'components/dropdowns/OptinNotifSettingDropdown';
import { ChannelDetailsProps } from 'modules/dashboard/configs/DashboardFeaturedChannels.config';
import { ChannelDetailsResponse } from 'queries';
import { FC, ReactNode } from 'react';

interface SubscribeChannelDropdownProps {
  children: ReactNode;
  channelDetails: ChannelDetailsResponse;
  setSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
  setSubscriberCount: React.Dispatch<React.SetStateAction<number>>;
  setLoading: (value: boolean) => void;
}

const SubscribeChannelDropdown: FC<SubscribeChannelDropdownProps> = (options) => {
  const { children, channelDetails, setLoading, setSubscribed, setSubscriberCount } = options;

  const handleSubscriberCount = () => {
    setSubscribed(true);
    setSubscriberCount((prevSubscriberCount) => prevSubscriberCount + 1);
  };

  return (
    <OptinNotifSettingDropdown
      channelDetail={channelDetails}
      setLoading={setLoading}
      onSuccessOptin={handleSubscriberCount}
    >
      {children}
    </OptinNotifSettingDropdown>
  );
};

export default SubscribeChannelDropdown;
