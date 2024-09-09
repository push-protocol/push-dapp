import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from 'blocks';

import { useDisclosure } from 'common';

import APP_PATHS from 'config/AppPaths';

import { useAccount } from 'hooks';

import { useGetChannelDetails } from 'queries';

import { NotificationSettingsComponent } from './components/NotificationSettingsComponent';

const NotificationSettings = () => {
  const { account } = useAccount();
  const modalControl = useDisclosure();
  const navigate = useNavigate();

  const { data: channelDetails, isLoading: loadingChannelDetails } = useGetChannelDetails(account);
  const channelSettings = channelDetails?.channel_settings ?? '';

  const modifiedChannelSettings = loadingChannelDetails
    ? Array(3).fill(0)
    : channelSettings
    ? JSON.parse(channelSettings)
    : [];

  useEffect(() => {
    if (!channelDetails && !loadingChannelDetails) {
      navigate(`${APP_PATHS.Channels}`);
    }
  }, [channelDetails]);

  return (
    <Box
      display="flex"
      padding={{ initial: 'spacing-lg', ml: 'spacing-md' }}
      flexDirection="column"
      gap="spacing-md"
      width={{ ml: '357px', initial: '800px' }}
      alignItems="center"
      borderRadius="radius-md"
      backgroundColor="surface-primary"
    >
      <NotificationSettingsComponent
        modalControl={modalControl}
        channelSettings={modifiedChannelSettings}
        loadingSettings={loadingChannelDetails}
      />
    </Box>
  );
};

export { NotificationSettings };
