// React and other libraries
import { FC } from 'react';

// third party libraries
import { css } from 'styled-components';

//hooks
import { useAccount, useCopy } from 'hooks';
import { useGetUserRewardsDetails } from 'queries';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { getPreviewBasePath } from '../../../../basePath';

// components
import { Box, Button, Copy, Text, Referral, Skeleton } from 'blocks';

export type ReferralSectionProps = {};

const ReferralSection: FC<ReferralSectionProps> = () => {
  const previewBasePath = getPreviewBasePath() || '';
  const baseUrl = window.location.origin + previewBasePath;

  const { isWalletConnected, account, connect } = useAccount();
  const caip10WalletAddress = walletToCAIP10({ account });

  const {
    data: userDetails,
    isSuccess,
    isLoading: isUserLoading,
  } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
    enabled: isWalletConnected,
  });

  const isLoading = isUserLoading || !isSuccess;

  const { textRef, isCopied, copyToClipboard } = useCopy();

  const handleConnectWallet = () => {
    connect();
  };

  return (
    <Box
      display="flex"
      flexDirection={{ tb: 'column-reverse', initial: 'row' }}
      padding="s12"
      borderRadius="r6"
      backgroundColor={{ light: 'white', dark: 'gray-900' }}
      alignItems={{ tb: 'flex-start', initial: 'center' }}
      justifyContent="space-between"
      gap={{ tb: 's9' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="s9"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="s2"
        >
          <Text
            variant="h3-bold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            Onboard Users on Push. <br /> Earn Points.
          </Text>
          <Box>
            <Text
              variant="bm-regular"
              color="gray-500"
            >
              Earn +12% of any Points your invites earn, and +2% of any Points your invite’s invites earn.
            </Text>
          </Box>
        </Box>

        {isWalletConnected && (
          <Skeleton isLoading={isLoading}>
            <Box
              display="flex"
              gap="s2"
              flexDirection={{ tb: 'column', initial: 'row' }}
            >
              <Box
                minWidth={{ tb: '-webkit-fill-available', initial: '344px' }}
                display="flex"
                alignItems="center"
                padding="s3"
                borderRadius="r3"
                border={{ light: '1.5px solid gray-200', dark: 'none' }}
                backgroundColor={{ light: 'transparent', dark: 'gray-800' }}
                css={css`
                  white-space: nowrap;
                `}
              >
                <Text
                  variant="bs-regular"
                  ref={textRef}
                  color={{ light: 'gray-1000', dark: 'gray-100' }}
                >
                  {baseUrl}/points?ref={userDetails?.userId}
                </Text>
              </Box>
              <Button
                leadingIcon={<Copy />}
                onClick={copyToClipboard}
              >
                {isCopied ? 'Copied' : 'Copy Link'}
              </Button>
            </Box>
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

      <Box height="auto">
        <Referral />
      </Box>
    </Box>
  );
};

export { ReferralSection };
