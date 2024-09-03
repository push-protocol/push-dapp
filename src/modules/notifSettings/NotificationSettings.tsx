import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from 'blocks';

import { useDisclosure } from 'common';

import APP_PATHS from 'config/AppPaths';

import { useAccount } from 'hooks';

import { useGetChannelDetails } from 'queries';

import { NotificationSettingsHeader } from './components/NotificationSettingsHeader';
import { NotificationSettingsBody } from './components/NotificationSettingsBody';
import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';
import { settingInitialValue } from './NotificationSettings.constants';

const NotificationSettings = () => {
  const { account } = useAccount();
  const modalControl = useDisclosure();
  const navigate = useNavigate();

  const [settingsToEdit, setSettingsToEdit] = useState<ChannelSetting>(settingInitialValue);

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
      <NotificationSettingsHeader
        modalControl={modalControl}
        setSettingsToEdit={setSettingsToEdit}
      />

      <NotificationSettingsBody
        modalControl={modalControl}
        settingsToEdit={settingsToEdit}
        setSettingsToEdit={setSettingsToEdit}
        channelSettings={modifiedChannelSettings}
        loadingSettings={loadingChannelDetails}
      />
    </Box>
  );
};

export { NotificationSettings };
