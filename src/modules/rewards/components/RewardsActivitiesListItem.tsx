// React and other libraries
import { FC, useState } from 'react';

//Hooks
import { Activity, useGetRewardsActivity } from 'queries';

//Components
import { Box, ErrorFilled, InfoFilled, Lozenge, RewardsBell, Skeleton, Text } from 'blocks';
import { ActivityButton } from './ActivityButton';
import { RewardsActivityIcon } from './RewardsActivityIcon';
import { RewardsActivityTitle } from './RewardsActivityTitle';
import { useSelector } from 'react-redux';
import { UserStoreType } from 'types';

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
  } = useGetRewardsActivity({ userId, activityId: activity.id }, { enabled: !!userId });

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const [errorMessage, setErrorMessage] = useState('');

  return (
    <Skeleton
      isLoading={isLoadingItem}
      height="90px"
    >
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
          borderRadius="r4 r4 r0 r0"
          alignItems={{ ml: 'flex-start', initial: 'center' }}
          gap="s4"
        >
          <RewardsActivityIcon type={activity.activityType} />

          <Box
            display="flex"
            flexDirection={{ ml: 'column', initial: 'row' }}
            gap={{ ml: 's4', initial: 's6' }}
            width="100%"
            alignItems={{ ml: 'baseline', initial: 'center' }}
          >
            {/* Rewards Contents */}
            <Box
              display="flex"
              flexDirection={{ ml: 'column', initial: 'row' }}
              gap={{ ml: 's1', initial: 's4' }}
              alignItems={{ ml: 'flex-start', initial: 'center' }}
              justifyContent="space-between"
              width="100%"
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
                  <RewardsActivityTitle
                    activityTitle={activity.activityTitle}
                    isLoading={isLoading}
                  />

                  {!!activity.expiryType && (
                    <Box display="flex">
                      <Lozenge size="small">
                        {`Expires in ${getUpdatedExpiryTime(activity.expiryType)} days`.toUpperCase()}
                      </Lozenge>
                    </Box>
                  )}
                </Box>

                {/* We don't need to show the Description when the title is discord and twitter according to the design */}
                {activity.activityType !== 'follow_push_on_discord' &&
                  activity.activityType !== 'follow_push_on_twitter' && (
                    <Skeleton isLoading={isLoading}>
                      <Text
                        variant="h5-regular"
                        color="gray-500"
                      >
                        {activity.activityDesc}
                      </Text>
                    </Skeleton>
                  )}
              </Box>

              {/* Rewards Points */}
              <Box
                display="flex"
                minWidth="200px"
                flexDirection="row"
                gap="s2"
                alignItems="center"
              >
                <Skeleton
                  isLoading={isLoading}
                  height="32px"
                >
                  <RewardsBell
                    width={32}
                    height={32}
                  />
                  <Text
                    variant="h4-semibold"
                    color={{ light: 'gray-1000', dark: 'gray-100' }}
                  >
                    {activity.points?.toLocaleString()} points
                  </Text>
                </Skeleton>
              </Box>
            </Box>

            {/* Buttons Logic */}
            {usersSingleActivity && userPushSDKInstance && !userPushSDKInstance?.readmode() && (
              <Box display="flex">
                <ActivityButton
                  userId={userId}
                  activityTypeId={activity.id}
                  activityType={activity.activityType}
                  refetchActivity={refetchActivity}
                  setErrorMessage={setErrorMessage}
                  usersSingleActivity={usersSingleActivity}
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
            <ErrorFilled
              color={{ light: 'red-600', dark: 'red-300' }}
              size={24}
            />
            <Text
              variant="h5-semibold"
              color={{ light: 'red-700', dark: 'red-300' }}
            >
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
            <InfoFilled
              color={{ light: 'gray-300', dark: 'gray-700' }}
              size={24}
            />

            <Text
              variant="h5-semibold"
              color={{ light: 'gray-500', dark: 'gray-600' }}
            >
              Verification Pending: Expected completion within 24-72 hours.
            </Text>
          </Box>
        )}
      </Box>
    </Skeleton>
  );
};

export { RewardsActivitiesListItem };
