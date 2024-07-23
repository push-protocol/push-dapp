import { FC, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Box } from 'blocks';

import { ContentLayout } from 'common';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

import { useAccount } from 'hooks';

import { ChannelDashboard } from 'modules/channelDashboard';
import { CreateChannel } from 'modules/createChannel';

import { useGetChannelDetails } from 'queries';
import APP_PATHS from 'config/AppPaths';

type ChannelDashboardPageProps = {
  channelID?: string
}

const ChannelDashboardPageV2: FC<ChannelDashboardPageProps> = ({
  channelID
}) => {
  let { channelId } = useParams();
  const calculatedChannelID = channelId ? channelId : channelID;

  const { account } = useAccount();

  const navigate = useNavigate();

  const { data: channelDetails, isLoading: loadingChannelDetails } = useGetChannelDetails(account);

  useEffect(() => {
    if (channelDetails) {
      navigate(`${APP_PATHS.ChannelDashboard}/${account}`);
    } else {
      navigate(`${APP_PATHS.ChannelDashboard}`)
    }
  }, [channelDetails, navigate]);


  if (loadingChannelDetails) {
    return (
      <ContentLayout>
        <Box>
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            title="Loading Channel Details. Please wait..."
          />
        </Box>
      </ContentLayout>
    )
  }

  if (!channelDetails) {
    return (
      <ContentLayout>
        <CreateChannel />
      </ContentLayout>
    )
  }


  if (channelDetails) {
    return (
      <ContentLayout>
        <ChannelDashboard />
      </ContentLayout>
    )
  }

};

export default ChannelDashboardPageV2;