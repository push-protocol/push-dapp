import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ContentLayout } from 'common';
import APP_PATHS from 'config/AppPaths';

import { ChannelDashboard } from 'modules/channelDashboard/ChannelDashboard';

import { useAccount } from 'hooks';

import { useGetChannelDetails } from 'queries';

const ChannelDashboardPageV2 = () => {
  const { account } = useAccount();
  const navigate = useNavigate();

  const { data: channelDetails, isLoading: loadingChannelDetails, refetch } = useGetChannelDetails(account);

  useEffect(() => {
    if (!loadingChannelDetails && !channelDetails) {
      navigate(`${APP_PATHS.CreateChannel}`);
    } else {
      navigate(`${APP_PATHS.ChannelDashboard}/${account}`);
    }
  }, [channelDetails, loadingChannelDetails]);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (channelDetails && !channelDetails.name) {
      interval = setInterval(() => {
        refetch();
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
