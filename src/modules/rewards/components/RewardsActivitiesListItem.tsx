import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Lozenge, RewardCoins, RewardsCircle, Skeleton, Text } from 'blocks';
import { Activity } from 'queries';
import { ActivityTypeID } from '../Rewards.constants';
import { DiscordActionButton } from './DiscordActionButton';
import { TwitterActionButton } from './TwitterActionButton';

export type RewardActivitiesListItemProps = {
  activity: Activity;
  loadingActivities: boolean;
}

const RewardsActivitiesListItem: FC<RewardActivitiesListItemProps> = ({
  activity,
  loadingActivities
}) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      padding={{ ml: 's3', lp: 's4 s2', initial: 's6' }}
      backgroundColor={{ light: 'gray-100', dark: 'gray-1000' }}
      borderRadius="r4"
      alignItems={{ ml: 'flex-start', initial: 'center' }}
      gap="s4"
    >
      <RewardsCircle />

      <Box
        display="flex"
        flexDirection={{ ml: 'column', initial: 'row' }}
        gap="s6"
        css={css`
          flex: 1;
        `}
        alignItems={{ ml: 'baseline', initial: 'center' }}
      >
        {/* Rewards Contents */}
        <Box
          display="flex"
          flexDirection={{ ml: 'column', initial: 'row' }}
          gap={{ ml: 's1', initial: 's4' }}
          alignItems={{ ml: 'flex-start', initial: 'center' }}
          justifyContent="space-between"
          css={css`
            flex: 1;
          `}
        >
          {/* Rewards Description */}
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection={{ lp: 'column-reverse', initial: 'row' }}
              gap={{ lp: 's1', initial: 's4' }}
            >
              <Skeleton isLoading={loadingActivities}>
                <Text variant="bl-semibold" color={{ light: 'gray-1000', dark: 'gray-100' }}>
                  {activity.activityTitle}
                </Text>
              </Skeleton>

              {!!activity.expiryType && (
                <Box display="flex">
                  <Lozenge size="small">Expires in 7 days</Lozenge>
                </Box>
              )}
            </Box>
            <Text variant="h5-regular" color="gray-500">
              {activity.activityDesc}
            </Text>
          </Box>

          {/* Rewards Points */}
          <Box display="flex" minWidth="160px" flexDirection="row" gap="s2" alignItems="center">
            <RewardCoins width={32} height={32} />
            <Text
              variant="h4-semibold"
              color={{ light: 'gray-1000', dark: 'gray-100' }}
              css={css`
                margin-right: 24px;
              `}
            >
              {activity.points?.toLocaleString()} points
            </Text>
          </Box>
        </Box>

        {/* Buttons Logic */}
        <Box display='flex'>
          {activity.id === ActivityTypeID.DISCORD && <DiscordActionButton activityTypeId={activity.id} />}
          {activity.id === ActivityTypeID.TWITTER && <TwitterActionButton activityTypeId={activity.id} />}
        </Box>
      </Box>
    </Box>
  );
};

export { RewardsActivitiesListItem };
