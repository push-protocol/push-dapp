// React and other libraries
import { FC } from 'react';

//Hooks
import { useAccount } from 'hooks';

//components
import { Box, HoverableSVG, Refresh, Skeleton, Text } from 'blocks';

export type DashboardSectionPointsProps = {
  title: string;
  points: number | undefined;
  rank?: number;
  usersInvited?: number;
  refetch?: () => void;
  isLoading: boolean;
};

const DashboardSectionPoints: FC<DashboardSectionPointsProps> = ({
  title,
  points,
  rank,
  usersInvited,
  refetch,
  isLoading,
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

        {refetch && isWalletConnected && (
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            onClick={refetch}
          >
            <HoverableSVG
              defaultBackground="pink-200"
              hoverBackground="pink-200"
              padding="s1"
              borderRadius="r4"
              icon={<Refresh color="pink-400" />}
            ></HoverableSVG>
            <Box margin="s0 s0 s0 s1">
              <Text
                variant="bs-semibold"
                color="gray-500"
              >
                Update
              </Text>
            </Box>
          </Box>
        )}
      </Box>

      <Box>
        <Skeleton isLoading={isLoading}>
          {isWalletConnected && (
            <Text
              variant="h1-bold"
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              {points !== undefined ? points : '0'}
            </Text>
          )}
        </Skeleton>

        {!isWalletConnected && (
          <Text
            variant="h1-bold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            0
          </Text>
        )}

        <Skeleton isLoading={isLoading}>
          {rank != null && (
            <Text
              variant="h5-bold"
              color="gray-500"
            >
              {rank > 0 ? `Rank #${rank}` : 'Rank -'}
            </Text>
          )}
        </Skeleton>

        <Skeleton isLoading={isLoading}>
          {usersInvited != null && (
            <Text
              variant="h5-bold"
              color="gray-500"
            >
              {usersInvited > 1 ? `${usersInvited} Users Invited` : `${usersInvited} User Invited`}
            </Text>
          )}
        </Skeleton>
      </Box>
    </Box>
  );
};

export { DashboardSectionPoints };
