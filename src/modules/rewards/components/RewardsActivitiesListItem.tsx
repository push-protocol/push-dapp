// React and other libraries
import React, { FC } from 'react';

// Third-party libraries
import { css } from 'styled-components';

//Hooks
import { Activity, useGetUsersSingleActivity } from 'queries';

//Components
import { Box, Discord, IllustrationProps, Lozenge, RewardCoins, RewardsDefaults, Skeleton, Text, Twitter } from 'blocks';
import { ActivityTypeID } from '../Rewards.constants';
import CommonButtonComponent from './CommonButtonComponent';
import VerifyButton from './VerifyButton';
import ActionButton from './ActionButton';
import { Link } from 'react-router-dom';

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
  const {
    data: usersSingleActivity,
    isLoading,
    refetch: refetchActivity,
  } = useGetUsersSingleActivity({ userId, activityId: activity.id }, { enabled: !!userId });

  return (
    <Skeleton isLoading={isLoadingItem}>
      <Box
        display="flex"
        flexDirection="row"
        padding={{ ml: 's3', lp: 's4 s2', initial: 's6' }}
        backgroundColor={{ light: 'gray-100', dark: 'gray-1000' }}
        borderRadius="r4"
        alignItems={{ ml: 'flex-start', initial: 'center' }}
        gap="s4"
      >

        {activity.name === 'Discord' && <Discord
          width={48}
          height={48}
        />}

        {activity.name === 'Twitter' && <Twitter
          width={48}
          height={48}
        />}

        {activity.name === '' && <RewardsDefaults
          width={48}
          height={48}
        />}

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
            <Box
              display="flex"
              flexDirection="column"
              gap="s1"
            >
              <Box
                display="flex"
                flexDirection={{ lp: 'column-reverse', initial: 'row' }}
                gap={{ lp: 's1', initial: 's4' }}
              >
                <Skeleton isLoading={isLoading}>
                  {/* <Link to={activity.JoinURL} target='_blank'> */}
                  {/* This Link will change to the new icon or illustration that zee will give */}
                  <Text
                    variant="bl-semibold"
                    color={{ light: 'gray-1000', dark: 'gray-100' }}
                  >
                    {activity.activityTitle}
                  </Text>
                  {/* </Link> */}
                </Skeleton>

                {!!activity.expiryType && (
                  <Box display="flex">
                    <Lozenge size="small">Expires in {getUpdatedExpiryTime(activity.expiryType)} days</Lozenge>
                  </Box>
                )}
              </Box>
              <Skeleton isLoading={isLoading}>
                <Text
                  variant="h5-regular"
                  color="gray-500"
                >
                  {activity.activityDesc}
                </Text>
              </Skeleton>
            </Box>

            {/* Rewards Points */}
            <Box
              display="flex"
              minWidth="160px"
              flexDirection="row"
              gap="s2"
              alignItems="center"
            >
              <Skeleton isLoading={isLoading}>
                <RewardCoins
                  width={32}
                  height={32}
                />
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
            <CommonButtonComponent
              label="Claimed"
              onClick={() => { }}
              disabled
            />
          )}

          {usersSingleActivity && usersSingleActivity?.status !== 'COMPLETED' && (
            <Box display="flex">
              {activity.id === ActivityTypeID.DISCORD.Id && (
                <VerifyButton
                  userId={userId}
                  activityTypeId={activity.id}
                  refetchActivity={refetchActivity}
                />
              )}

              {activity.id !== ActivityTypeID.DISCORD.Id && (
                <ActionButton
                  userId={userId}
                  activityTypeId={activity.id}
                  refetchActivity={refetchActivity}
                />
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Skeleton>
  );
};

export { RewardsActivitiesListItem };
