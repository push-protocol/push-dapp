// React and other libraries
import React, { FC, useState } from 'react';

// Third-party libraries
import { css } from 'styled-components';

//Hooks
import { Activity, ActvityType, useGetRewardsActivity } from 'queries';

//Components
import {
  Box,
  Button,
  Discord,
  ErrorFilled,
  InfoFilled,
  Link,
  Lozenge,
  RewardsActivity,
  RewardsBell,
  Skeleton,
  Text,
  Twitter
} from 'blocks';
import ActivityButton from './ActivityButton';
// import { Link } from 'react-router-dom';

export type RewardActivitiesListItemProps = {
  userId: string;
  activity: Activity;
  isLoadingItem: boolean;
};

const getUpdatedExpiryTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const days = date.getDate();
  return days;
};

const RewardsActivitiesListItem: FC<RewardActivitiesListItemProps> = ({ userId, activity, isLoadingItem }) => {
  const { data: usersSingleActivity, isLoading, refetch: refetchActivity } = useGetRewardsActivity(
    { userId, activityId: activity.id },
    { enabled: !!userId }
  );

  const [errorMessage, setErrorMessage] = useState('');

  const RewardsActivityIcon = (type: ActvityType) => {
    if (type === 'follow_push_on_discord') {
      return <Discord width={48} height={48} />;
    }

    if (type === 'follow_push_on_twitter') {
      return <Twitter width={48} height={48} />;
    }

    return <RewardsActivity />;
  };

  const resolveActivityTitle = (activityTitle: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/;
    const match = activityTitle?.match(regex);
    if (match) {
      const preText = activityTitle.substring(0, match.index);
      const linkedText = match[1];
      const url = match[2];
      let postText;
      if (match.index) {
        postText = activityTitle.substring(match.index + match[0].length);
      }

      return (
        <Box display="flex" gap='s1'>
          <Text variant="bl-semibold"> {preText}</Text>
          <Link color='pink-500' to={url} target="_blank" rel="noopener noreferrer">
            <Text variant="bl-semibold" color='pink-500'>{linkedText}</Text>
          </Link>
          <Text variant="bl-semibold"> {postText}</Text>
        </Box>
      );
    }
    return (
      <Text variant="bl-semibold" color={{ light: 'gray-1000', dark: 'gray-100' }}>
        {activityTitle}
      </Text>
    );
  };

  return (
    <Skeleton isLoading={isLoadingItem} height="90px">
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="r4"
        backgroundColor={{ light: 'gray-100', dark: 'gray-1000' }}
      >
        <Box
          display="flex"
          flexDirection="row"
          padding={{ ml: 's3', lp: 's4 s2', initial: 's6' }}
          // backgroundColor={{ light: 'gray-100', dark: 'gray-1000' }}
          borderRadius="r4 r4 r0 r0"
          alignItems={{ ml: 'flex-start', initial: 'center' }}
          gap="s4"
        >
          {RewardsActivityIcon(activity.activityType)}

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
              <Box display="flex" flexDirection="column" gap="s1">
                <Box
                  display="flex"
                  flexDirection={{ lp: 'column-reverse', initial: 'row' }}
                  gap={{ lp: 's1', initial: 's4' }}
                >
                  <Skeleton isLoading={isLoading}>
                    {/* <Link to={activity.JoinURL} target='_blank'> */}
                    {resolveActivityTitle(activity.activityTitle)}
                    {/* </Link> */}
                  </Skeleton>

                  {!!activity.expiryType && (
                    <Box display="flex">
                      <Lozenge size="small">Expires in {getUpdatedExpiryTime(activity.expiryType)} days</Lozenge>
                    </Box>
                  )}
                </Box>
                <Skeleton isLoading={isLoading}>
                  <Text variant="h5-regular" color="gray-500">
                    {activity.activityDesc}
                  </Text>
                </Skeleton>
              </Box>

              {/* Rewards Points */}
              <Box display="flex" minWidth="160px" flexDirection="row" gap="s2" alignItems="center">
                <Skeleton isLoading={isLoading} height="32px">
                  <RewardsBell width={32} height={32} />
                  <Text
                    variant="h4-semibold"
                    color={{ light: 'gray-1000', dark: 'gray-100' }}
                    css={css`
                      margin-right: 24px;
                    `}
                  >
                    {activity.points?.toLocaleString()} points
                  </Text>
                </Skeleton>
              </Box>
            </Box>

            {/* Buttons Logic */}

            {usersSingleActivity?.status === 'COMPLETED' && (
              <Box
                display="flex"
                alignItems={{ ml: 'flex-start', initial: 'center' }}
                flexDirection="column"
                minWidth="100px"
              >
                <Skeleton width="100%" isLoading={isLoading}>
                  <Button
                    variant="tertiary"
                    size="small"
                    css={css`
                      width: 100%;
                    `}
                    disabled={true}
                  >
                    Claimed
                  </Button>
                </Skeleton>
              </Box>
            )}

            {usersSingleActivity?.status === 'PENDING' && (
              <Box
                display="flex"
                alignItems={{ ml: 'flex-start', initial: 'center' }}
                flexDirection="column"
                minWidth="100px"
              >
                <Skeleton width="100%" isLoading={isLoading}>
                  <Button
                    variant="tertiary"
                    size="small"
                    css={css`
                      width: 100%;
                    `}
                    disabled={true}
                  >
                    Pending
                  </Button>
                </Skeleton>
              </Box>
            )}

            {usersSingleActivity &&
              usersSingleActivity?.status !== 'COMPLETED' &&
              usersSingleActivity?.status !== 'PENDING' && (
                <Box display="flex">
                  <ActivityButton
                    userId={userId}
                    activityTypeId={activity.id}
                    activityType={activity.activityType}
                    refetchActivity={refetchActivity}
                    setErrorMessage={setErrorMessage}
                  />
                </Box>
              )}
          </Box>
        </Box>

        {errorMessage && (
          <Box
            gap="s2"
            display="flex"
            flexDirection="row"
            alignItems="center"
            backgroundColor={{ light: 'red-100', dark: 'red-800' }}
            borderRadius="r0 r0 r4 r4"
            padding={{ ml: 's2', lp: 's2', initial: 's2' }}
          >
            <ErrorFilled color={{ light: 'red-600', dark: 'red-300' }} size={24} />
            <Text variant="h5-semibold" color={{ light: 'red-700', dark: 'red-300' }}>
              {errorMessage}
            </Text>
          </Box>
        )}

        {usersSingleActivity?.status === 'PENDING' && (
          <Box
            gap="s2"
            display="flex"
            flexDirection="row"
            alignItems="center"
            backgroundColor={{ light: 'gray-200', dark: 'gray-800' }}
            borderRadius="r0 r0 r4 r4"
            padding={{ ml: 's2', lp: 's2', initial: 's2' }}
          >
            <InfoFilled color={{ light: 'gray-300', dark: 'gray-700' }} size={24} />

            <Text variant="h5-semibold" color={{ light: 'gray-500', dark: 'gray-600' }}>
              Verification Pending: Expected completion within 24-72 hours.
            </Text>
          </Box>
        )}
      </Box>
    </Skeleton>
  );
};

export { RewardsActivitiesListItem };
