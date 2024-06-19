import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, RewardsCircle, Text } from 'blocks';
import { useAccount } from 'hooks';

export type DashboardSectionProps = {
  onGetStarted: () => void;
};

const DashboardSection: FC<DashboardSectionProps> = ({ onGetStarted }) => {
  const { isWalletConnected } = useAccount();

  return (
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
          background: radial-gradient(174.95% 108.75% at 64.27% 0%, #debeff 30.74%, #c0fff7 100%);
        `}
      >
        <Box
          gap="s3"
          display="flex"
          alignItems="center"
        >
          <RewardsCircle />
          <Box
            display="flex"
            flexDirection="column"
          >
            <Text variant="h4-semibold">Earn Rewards for Exploring!</Text>
            <Text variant="bl-regular">Discover, participate, and earn rewards with every step you take in Push. </Text>
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
          <Text
            variant="h5-bold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            TOTAL POINTS
          </Text>
          {isWalletConnected ? (
            <Box>
              <Text
                variant="h1-bold"
                color={{ light: 'gray-1000', dark: 'gray-100' }}
              >
                11,500
              </Text>
              <Text
                variant="h5-bold"
                color="gray-500"
              >
                Rank #240
              </Text>
            </Box>
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
          {isWalletConnected ? (
            <Box>
              <Text
                variant="h1-bold"
                color={{ light: 'gray-1000', dark: 'gray-100' }}
              >
                10
              </Text>
              <Text
                variant="h5-bold"
                color="gray-500"
              >
                2 Users Invited
              </Text>
            </Box>
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
  );
};

export { DashboardSection };
