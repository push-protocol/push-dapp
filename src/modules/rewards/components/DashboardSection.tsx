import { FC } from 'react';
import { css } from 'styled-components';

//Hooks
import { useAccount } from 'hooks';
import { useGetUserRewardsDetails } from 'queries';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';

//components
import { Box, Button, HoverableSVG, Points, Refresh, Skeleton, Text } from 'blocks';

export type DashboardSectionProps = {
  onGetStarted: () => void;
};

const DashboardSection: FC<DashboardSectionProps> = ({ onGetStarted }) => {
  const { isWalletConnected, account } = useAccount();
  let walletAddress = walletToCAIP10({ account });
  const { data: userDetails, refetch, isSuccess, isLoading, isFetching } = useGetUserRewardsDetails({ walletAddress });

  const isPending = isLoading || isFetching;

  const handleRefetch = () => {
    refetch();
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="s4"
      >
        <Text
          variant="h4-bold"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          Dashboard
        </Text>
        <Box
          borderRadius="r6"
          display="flex"
          padding={{ tb: 's4', initial: 's6' }}
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ tb: 'column', initial: 'row' }}
          css={css`
            background: radial-gradient(circle, rgba(222, 190, 255, 1) 0%, rgba(192, 255, 247, 1) 85%);
          `}
        >
          <Box
            width="-webkit-fill-available"
            display="flex"
            flexDirection={{ tb: 'column', initial: 'row' }}
            gap={{ tb: 's4' }}
            alignItems={{ tb: 'stretch', initial: 'center' }}
            justifyContent="space-between"
          >
            <Box
              gap="s3"
              display="flex"
              alignItems="center"
            >
              <Points />
              <Box
                display="flex"
                flexDirection="column"
              >
                <Text variant="h4-semibold">Earn Rewards for Exploring!</Text>
                <Text variant="bl-regular">
                  Discover, participate, and earn rewards with every step you take in Push.{' '}
                </Text>
              </Box>
            </Box>

            <Button
              variant="tertiary"
              size="small"
              onClick={onGetStarted}
            >
              Get started
            </Button>
          </Box>
        </Box>

        <Box
          display="flex"
          gap="s6"
          flexDirection={{ tb: 'column', initial: 'row' }}
        >
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
                color={{ light: 'gray-1000', dark: 'gray-100' }}
              >
                TOTAL POINTS
              </Text>

              {isWalletConnected && (
                <Box
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  onClick={handleRefetch}
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

            {isWalletConnected && isSuccess && !isPending ? (
              <Box>
                <Text
                  variant="h1-bold"
                  color={{ light: 'gray-1000', dark: 'gray-100' }}
                >
                  {userDetails?.totalPoints}
                </Text>

                <Text
                  variant="h5-bold"
                  color="gray-500"
                >
                  Rank #{userDetails?.rank > 0 ? userDetails?.rank : '-'}
                </Text>
              </Box>
            ) : isWalletConnected && isPending ? (
              <Skeleton
                isLoading={isPending}
                height="40px"
                width="100px"
                margin="s6 s0 s0 s0"
              >
                <Box></Box>
              </Skeleton>
            ) : (
              <Box>
                <Text
                  variant="h1-bold"
                  color={{ light: 'gray-1000', dark: 'gray-100' }}
                >
                  0
                </Text>
              </Box>
            )}
          </Box>
          <Box
            width="-webkit-fill-available"
            display="flex"
            flexDirection="column"
            padding="s6"
            borderRadius="r6"
            gap="s3"
            border={{ light: '1px solid gray-200', dark: '1px solid gray-800' }}
          >
            <Text
              variant="h5-bold"
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              REFFERAL POINTS
            </Text>
            {isWalletConnected && isSuccess && !isPending ? (
              <Box>
                <Text
                  variant="h1-bold"
                  color={{ light: 'gray-1000', dark: 'gray-100' }}
                >
                  {userDetails?.referralPoints}
                </Text>
                <Text
                  variant="h5-bold"
                  color="gray-500"
                >
                  {userDetails?.usersInvited} {userDetails?.usersInvited > 1 ? 'Users' : 'User'} Invited
                </Text>
              </Box>
            ) : isWalletConnected && isPending ? (
              <Skeleton
                isLoading={isPending}
                height="40px"
                margin="s6 s0 s0 s0"
                width="100px"
              >
                <Box></Box>
              </Skeleton>
            ) : (
              <Box>
                <Text
                  variant="h1-bold"
                  color={{ light: 'gray-1000', dark: 'gray-100' }}
                >
                  0
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { DashboardSection };
