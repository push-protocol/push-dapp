import { FC } from 'react';
import { css } from 'styled-components';

//Hooks
import { useAccount } from 'hooks';
import { useGetUserRewardsDetails } from 'queries';

//components
import { Box, Button, HoverableSVG, RewardsCircle, Refresh, Skeleton, Text } from 'blocks';

// Styles
import { ImageV3 } from '../Rewards.styled';
import DashboardImage from 'assets/rewards/DashboardImage.png';

export type DashboardSectionProps = {
  onGetStarted: () => void;
};

const DashboardSection: FC<DashboardSectionProps> = ({ onGetStarted }) => {
  const { isWalletConnected, chainId, account } = useAccount();
  let walletAddress = 'eip155:' + account;
  const {
    data: userDetails,
    refetch,
    isSuccess,
    isLoading,
    isFetching,
    error,
  } = useGetUserRewardsDetails({ walletAddress });

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
            gap="s3"
            display="flex"
            alignItems="center"
          >
            <ImageV3
              width="90px"
              height="auto"
              src={DashboardImage}
              alt={'Earn Rewards for Exploring!'}
            />
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
            css={css`
              @media (max-width: 768px) {
                min-width: -webkit-fill-available;
                margin-top: 16px;
              }
            `}
          >
            Get started
          </Button>
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
                  <Text
                    variant="bs-semibold"
                    color="gray-500"
                    css={css`
                      margin-left: var(--s2);
                    `}
                  >
                    Update
                  </Text>
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
                  Rank #{userDetails?.rank}
                </Text>
              </Box>
            ) : isWalletConnected && isPending ? (
              <Skeleton
                isLoading={isPending}
                height="40px"
                width="100px"
                css={css`
                  margin-top: var(--s6);
                `}
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
                width="100px"
                css={css`
                  margin-top: var(--s6);
                `}
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

      {/* {activeTab === 'dashboard' && <RefferalSection />} */}
    </>
  );
};

export { DashboardSection };
