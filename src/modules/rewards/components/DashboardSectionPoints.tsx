// React and other libraries
import { FC } from 'react';

//Hooks
import { useAccount } from 'hooks';

//components
import { Box, HoverableSVG, Refresh, Skeleton, Text } from 'blocks';
import { UserRewardsDetailResponse } from 'queries';

export type DashboardSectionPointsProps = {
  title: string;
  points: number | undefined;
  rank?: number;
  usersInvited?: number;
  refetch?: () => void;
  isLoading: boolean;
  isFetching?: boolean;
  data?: UserRewardsDetailResponse;
  multiplier?: boolean;
};

const DashboardSectionPoints: FC<DashboardSectionPointsProps> = ({
  title,
  points,
  rank,
  usersInvited,
  refetch,
  isLoading,
  isFetching,
  data,
  multiplier,
}) => {
  const { isWalletConnected } = useAccount();

  return (
    <Box
      width="-webkit-fill-available"
      display="flex"
      flexDirection="column"
      padding="s6"
      borderRadius="r6"
      gap="s3"
      border={{ light: '1px solid gray-200', dark: '1px solid gray-800' }}
      minHeight={{ tb: '115px', initial: '125px' }}
      justifyContent="space-between"
    >
      <Box
        width="-webkit-fill-available"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          variant="h5-bold"
          textTransform="uppercase"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          {title}
        </Text>

        {data && refetch && isWalletConnected && (
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            onClick={refetch}
          >
            <HoverableSVG
              defaultBackground={{ light: 'pink-200', dark: 'pink-300' }}
              hoverBackground={{ light: 'pink-200', dark: 'pink-300' }}
              padding="s1"
              borderRadius="r4"
              icon={<Refresh color="pink-400" />}
            ></HoverableSVG>
            <Box margin="s0 s0 s0 s1">
              <Text
                variant="bs-semibold"
                color="gray-500"
              >
                {isFetching ? 'Updating...' : 'Update'}
              </Text>
            </Box>
          </Box>
        )}
      </Box>

      <Box>
        {/* total points */}
        <Skeleton isLoading={isLoading}>
          {isWalletConnected && !multiplier && (
            <Text
              variant="h1-bold"
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              {points !== undefined ? points?.toLocaleString() : '0'}
            </Text>
          )}
        </Skeleton>

        {/* other section placeholder */}
        {!isWalletConnected && !multiplier && (
          <Text
            variant="h1-bold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            0
          </Text>
        )}

        {/* multipler placeholder */}
        {!isWalletConnected && multiplier && (
          <Text
            variant="h1-bold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            1x
          </Text>
        )}

        {/* show multiplier for center box */}
        {isWalletConnected && multiplier && data && (
          <>
            <Text
              variant="h1-bold"
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              {`${data?.multiplier}x`}
            </Text>
            <Text
              variant="h5-bold"
              color="text-tertiary"
            >
              Complete activities to increase
            </Text>
          </>
        )}

        {/* show rank only when user has points more than 0 */}
        <Skeleton isLoading={isLoading}>
          {points && points > 0 && rank != null ? (
            <Text
              variant="h5-bold"
              color="gray-500"
            >
              {rank > 0 && `Rank #${rank}`}
            </Text>
          ) : null}
        </Skeleton>

        {/* show users invited only when user has a1or more users invited */}
        <Skeleton isLoading={isLoading}>
          {usersInvited && usersInvited > 0 ? (
            <Text
              variant="h5-bold"
              color="gray-500"
            >
              {usersInvited > 1 ? `${usersInvited} Users Invited` : `${usersInvited} User Invited`}
            </Text>
          ) : null}
        </Skeleton>
      </Box>
    </Box>
  );
};

export { DashboardSectionPoints };
