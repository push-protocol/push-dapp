import { FC } from "react";

import { Box } from "blocks";
import { useAccount } from "hooks";

import { useGetChannelDetails } from "queries";

import { ChannelDashboardNotificationSettings } from "./ChannelDashboardNotificationSettings";

type ChannelDashboardBodyProps = {

}

const ChannelDashboardBody: FC<ChannelDashboardBodyProps> = () => {

  const { account } = useAccount();

  const { data: channelDetails, isLoading: loadingChannelSettings } = useGetChannelDetails(account);

  return (
    <Box
      display='flex'
      gap='spacing-md'
      width='100%'
      flexDirection={{ ml: 'column', initial: 'row' }}
    >

      <ChannelDashboardNotificationSettings
        channel_settings={channelDetails?.channel_settings}
        loadingChannelSettings={loadingChannelSettings}
      />

    </Box>
  );
};

export { ChannelDashboardBody };