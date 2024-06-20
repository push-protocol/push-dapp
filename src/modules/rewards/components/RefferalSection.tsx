import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, Copy, Text, Skeleton } from 'blocks';
import { useAccount } from 'hooks';

import { useGetUserRewardsDetails } from 'queries';

export type RefferalSectionProps = {};

const RefferalSection: FC<RefferalSectionProps> = () => {
  const { isWalletConnected, chainId, account, connect } = useAccount();
  let walletAddress = 'eip155:' + account;
  const { data: userDetails, isSuccess, isLoading, isFetching, error } = useGetUserRewardsDetails({ walletAddress });

  const isPending = isLoading || isFetching;

  const handleConnectWallet = () => {
    connect();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s9"
      padding="s12"
      borderRadius="r6"
      backgroundColor={{ light: 'white', dark: 'gray-900' }}
    >
      <Box>
        <Text
          variant="h3-bold"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          Onboard Users on Push.
        </Text>
        <Text
          variant="h3-bold"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          Earn Points.
        </Text>
        <Text
          variant="bm-regular"
          color="gray-500"
        >
          Earn +12% of any Points your invites earn, and +2% of any Points your invite’s invites earn.
        </Text>
      </Box>

      {isWalletConnected && isSuccess && !isPending && (
        <Box
          display="flex"
          gap="s2"
          flexDirection={{ tb: 'column', initial: 'row' }}
        >
          <Box
            width={{ tb: '-webkit-fill-available', initial: '344px' }}
            display="flex"
            alignItems="center"
            padding="s3"
            borderRadius="r3"
            border={{ light: '1.5px solid gray-200', dark: 'none' }}
            backgroundColor={{ light: 'transparent', dark: 'gray-800' }}
          >
            <Text
              variant="bs-regular"
              color={{ light: 'gray-1000', dark: 'gray-100' }}
            >
              https://app.push.org/?ref={userDetails?.userId}
            </Text>
          </Box>
          <Button leadingIcon={<Copy />}>Copy Link</Button>
        </Box>
      )}

      {isWalletConnected && isPending && (
        <Skeleton
          isLoading={isPending}
          height="40px"
          width={{ tb: '-webkit-fill-available', initial: '344px' }}
          css={css`
            margin-top: var(--s6);
          `}
        >
          <Box></Box>
        </Skeleton>
      )}

      {!isWalletConnected && (
        <Box>
          <Button
            size="small"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </Button>
        </Box>
      )}
    </Box>
  );
};

export { RefferalSection };
