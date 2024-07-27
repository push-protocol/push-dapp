import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box, Button, Separator, Settings, Skeleton, Text } from 'blocks';

import { ChannelSettingsList } from './ChannelSettingsList';
import { ChannelDashboardNullState } from './ChannelDashboardNullState';

import { ChannelSetting } from '../ChannelDashboard.types';

type ChannelDashboardNotificationSettingsProps = {
  channel_settings?: string;
  loadingChannelSettings: boolean;
};

const ChannelDashboardNotificationSettings: FC<ChannelDashboardNotificationSettingsProps> = ({
  channel_settings,
  loadingChannelSettings
}) => {
  const navigate = useNavigate();

  const handleAddSettings = () => {
    navigate('/channel/settings');
  };

  return (
    <Box
      display="flex"
      padding="spacing-sm"
      width="-webkit-fill-available"
      border="border-sm solid stroke-tertiary"
      borderRadius="radius-sm"
      flexDirection="column"
    >
      <Box display="flex" flexDirection="column" gap="spacing-xxs">
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column" gap='spacing-xxxs'>
            <Skeleton isLoading={loadingChannelSettings}>
              <Text variant="h5-semibold" color="text-primary">
                Notification Settings
              </Text>
            </Skeleton>
            <Skeleton isLoading={loadingChannelSettings}>
              <Text variant="c-regular" color="text-tertiary">
                {' '}
                Manage notification preferences for users
              </Text>
            </Skeleton>
          </Box>
          {channel_settings && (
            <Button
              size="extraSmall"
              variant="tertiary"
              leadingIcon={<Settings />}
              onClick={() => navigate('/channel/settings')}
            >
              Manage
            </Button>
          )}
        </Box>

        <Separator />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        overflow="auto"
        height={{ initial: '274px', ml: '230px' }}
        justifyContent={channel_settings ? 'flex-start' : 'center'}
      >
        {channel_settings ? (
          <>
            {JSON.parse(channel_settings).map((channelsetting: ChannelSetting) => {
              return <ChannelSettingsList settingName={channelsetting.description} type={channelsetting.type} />;
            })}
          </>
        ) : (
          <ChannelDashboardNullState
            state="notificationSettings"
            title="No settings yet"
            subTitle="Add options for users to customize notifications."
            onClick={handleAddSettings}
          />
        )}
      </Box>
    </Box>
  );
};

export { ChannelDashboardNotificationSettings };
