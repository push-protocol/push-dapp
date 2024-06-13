import ManageNotifSettingDropdown from "components/dropdowns/ManageNotifSettingDropdown";
import { ChannelDetailsProps } from "modules/dashboard/configs/DashboardFeaturedChannels.config";
import { FC, ReactNode } from "react";
import { UserSetting } from 'helpers/channel/types';

interface UnsubscribeChannelDropdownProps {
  children: ReactNode;
  channelDetail: ChannelDetailsProps;
  centeronMobile?: boolean;
  setSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
  setSubscriberCount: React.Dispatch<React.SetStateAction<number>>;
  userSetting: UserSetting[];
}

const UnsubscribeChannelDropdown: FC<UnsubscribeChannelDropdownProps> = (options) => {
  const { children, centeronMobile = false, channelDetail, setSubscribed, setSubscriberCount, userSetting } = options;

  console.log("Center on Mpbile", centeronMobile);

  return (
    <ManageNotifSettingDropdown
      centerOnMobile={centeronMobile}
      channelDetail={channelDetail}
      userSetting={userSetting}
      onSuccessOptout={() => {
        setSubscribed(false);
        setSubscriberCount((prevSubscriberCount: number) => prevSubscriberCount - 1);
      }}
    >
      {children}
    </ManageNotifSettingDropdown>
  );
};

export default UnsubscribeChannelDropdown;