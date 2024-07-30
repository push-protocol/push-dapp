import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box } from 'blocks';

import { ContentLayout } from 'common';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

import { useAccount } from 'hooks';

import { useGetChannelDetails } from 'queries';
import APP_PATHS from 'config/AppPaths';

const ChannelDashboardPageV2 = () => {

  const { account } = useAccount();
  const navigate = useNavigate();

  const { data: channelDetails, isLoading: loadingChannelDetails, refetch, isRefetching } = useGetChannelDetails(account);

  console.log("Getting channel details in dashboard", channelDetails, isRefetching);

  useEffect(() => {
    if (!channelDetails) {
      navigate(`${APP_PATHS.CreateChannel}`)
    }

  }, [channelDetails])

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    console.log("channelDetails && !channelDetails.name", channelDetails && !channelDetails.name);

    if (channelDetails && !channelDetails.name) {
      interval = setInterval(() => {
        refetch()
      }, 3000)
    }

    return () => {
      clearInterval(interval)
    }

  }, [channelDetails, channelDetails?.name])


  if (loadingChannelDetails || isRefetching || !channelDetails?.name) {
    return <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <LoaderSpinner
        type={LOADER_TYPE.SEAMLESS}
        title="Loading Channel Details. Please wait..."
      />
    </Box>
  }


  if (channelDetails?.name) {
    return (
      <ContentLayout>
        Dashboard
      </ContentLayout>
    )
  }
};

export default ChannelDashboardPageV2;