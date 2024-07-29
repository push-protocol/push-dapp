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
      padding="spacing-md"
      borderRadius="radius-md"
      gap="spacing-xs"
      border="border-sm solid stroke-secondary"
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
          color="text-primary"
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
              defaultBackground="surface-brand-subtle"
              hoverBackground="surface-brand-subtle"
              padding="spacing-xxxs"
              borderRadius="radius-sm"
              icon={<Refresh color="icon-brand-medium" />}
            ></HoverableSVG>
            <Box margin="spacing-none spacing-none spacing-none spacing-xxxs">
              <Text
                variant="bs-semibold"
                color="text-tertiary"
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
              color="text-primary"
            >
              {points !== undefined ? points?.toLocaleString() : '0'}
            </Text>
          )}
        </Skeleton>

        {/* other section placeholder */}
        {!isWalletConnected && !multiplier && (
          <Text
            variant="h1-bold"
            color="text-primary"
          >
            0
          </Text>
        )}

        {/* multipler placeholder for new users or when wallet is not connected */}
        {((!isWalletConnected && multiplier) || (isWalletConnected && multiplier && !data)) && (
          <Skeleton isLoading={isLoading}>
            <Text
              variant="h1-bold"
              color="text-primary"
            >
              1x
            </Text>
          </Skeleton>
        )}

        {/* show multiplier for center box */}
        {isWalletConnected && multiplier && data && (
          <Skeleton isLoading={isLoading}>
            <Text
              variant="h1-bold"
              color="text-primary"
            >
              {`${data?.multiplier}x`}
            </Text>
            <Text
              variant="h5-bold"
              color="text-tertiary"
            >
              Complete activities to increase
            </Text>
          </Skeleton>
        )}

        {/* show rank only when user has points more than 0 */}
        <Skeleton isLoading={isLoading}>
          {points && points > 0 && rank != null ? (
            <Text
              variant="h5-bold"
              color="text-tertiary"
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
              color="text-tertiary"
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
