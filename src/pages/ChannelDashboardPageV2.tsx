import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ContentLayout } from 'common';
import useFetchChannelDetails from 'common/hooks/useFetchUsersChannelDetails';
import APP_PATHS from 'config/AppPaths';

import { ChannelDashboard } from 'modules/channelDashboard/ChannelDashboard';

import { useAccount } from 'hooks';

const ChannelDashboardPageV2 = () => {
  const { account } = useAccount();
  const navigate = useNavigate();

  const { channelDetails, loadingChannelDetails, refetchChannelDetails } = useFetchChannelDetails();

  useEffect(() => {
    if (!loadingChannelDetails && !channelDetails) {
      navigate(`${APP_PATHS.CreateChannel}`);
    } else {
      navigate(`${APP_PATHS.ChannelDashboard(account)}`);
    }
  }, [channelDetails, loadingChannelDetails]);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (channelDetails && !channelDetails.name) {
      interval = setInterval(() => {
        refetchChannelDetails();
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [channelDetails, channelDetails?.name]);

  return (
    <ContentLayout>
      <ChannelDashboard />
    </ContentLayout>
  );
};

export default ChannelDashboardPageV2;
