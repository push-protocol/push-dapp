import { FC, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Box } from 'blocks';

import { ContentLayout } from 'common';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

import { useAccount } from 'hooks';

import { ChannelDashboard } from 'modules/channelDashboard';

import { useGetChannelDetails } from 'queries';
import APP_PATHS from 'config/AppPaths';

type ChannelDashboardPageProps = {
  channelID?: string
}

const ChannelDashboardPageV2: FC<ChannelDashboardPageProps> = ({
  channelID
}) => {

  const { channelId } = useParams();

  const { account } = useAccount();
  const navigate = useNavigate();

  const { data: channelDetails, isLoading: loadingChannelDetails, refetch, isRefetching } = useGetChannelDetails(account);

  useEffect(() => {
    if (!channelDetails) {
      navigate(`${APP_PATHS.CreateChannel}`)
    }

  }, [channelDetails])

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
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
        <ChannelDashboard />
      </ContentLayout>
    )
  }

};

export default ChannelDashboardPageV2;