import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from 'blocks';

import { ContentLayout } from 'common';
import APP_PATHS from 'config/AppPaths';

import { useAccount } from 'hooks';

import { CreateChannel } from 'modules/createChannel';

import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import useFetchChannelDetails from 'common/hooks/useFetchUsersChannelDetails';

const CreateChannelPage = () => {
  const { account, isWalletConnected, connect } = useAccount();
  const navigate = useNavigate();

  // To show blocknative modal as soon as user enters the create channel page
  useEffect(() => {
    if (!isWalletConnected) {
      connect();
    }
  }, [account]);

  const { channelDetails, loadingChannelDetails } = useFetchChannelDetails();

  useEffect(() => {
    if (channelDetails && !loadingChannelDetails) {
      navigate(`${APP_PATHS.ChannelDashboard(account)}`);
    }
  }, [channelDetails]);

  if (loadingChannelDetails) {
    return (
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <LoaderSpinner
          type={LOADER_TYPE.SEAMLESS}
          title="Loading Channel Details. Please wait..."
        />
      </Box>
    );
  } else {
    return (
      <ContentLayout>
        <CreateChannel />
      </ContentLayout>
    );
  }
};

export default CreateChannelPage;
