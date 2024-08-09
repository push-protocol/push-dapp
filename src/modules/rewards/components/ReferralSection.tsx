// React and other libraries
import { FC } from 'react';

// third party libraries
import { css } from 'styled-components';

//hooks
import { useAccount, useCopy } from 'hooks';
import { useGetUserRewardsDetails } from 'queries';
import { useRewardsAuth } from '../hooks/useRewardsAuth';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { getPreviewBasePath } from '../../../../basePath';

// components
import { Box, Button, Copy, Text, Referral } from 'blocks';

export type ReferralSectionProps = {
  handleUnlockProfile: () => void;
};

const ReferralSection: FC<ReferralSectionProps> = ({ handleUnlockProfile }) => {
  const previewBasePath = getPreviewBasePath() || '';
  const baseUrl = window.location.origin + previewBasePath;

  const { isWalletConnected, account, connect } = useAccount();
  const caip10WalletAddress = walletToCAIP10({ account });

  const { data: userDetails, isLoading } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { status } = useRewardsAuth();

  const { textRef, isCopied, copyToClipboard } = useCopy();

  const handleConnectWallet = () => {
    connect();
  };

  return (
    <Box
      display="flex"
      flexDirection={{ tb: 'column-reverse', initial: 'row' }}
      padding={{ tb: 'spacing-sm', initial: 'spacing-xxl' }}
      borderRadius="radius-md"
      backgroundColor="surface-primary"
      alignItems={{ tb: 'flex-start', initial: 'center' }}
      justifyContent="space-between"
      gap={{ tb: 'spacing-lg' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-lg"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xxs"
        >
          <Text
            variant="h3-bold"
            color="text-primary"
          >
            Onboard Users on Push. <br /> Earn Points.
          </Text>
          <Box>
            <Text
              variant="bm-regular"
              color="text-tertiary"
            >
              Earn +12% of any Points your invites earn, and +2% of any Points your invite’s invites earn.
            </Text>
          </Box>
        </Box>

        {isWalletConnected && userDetails && (
          <Box
            display="flex"
            gap="spacing-xxs"
            width="100%"
            flexDirection={{ tb: 'column', initial: 'row' }}
          >
            <Box
              minWidth={{ tb: 'auto', initial: '344px' }}
              display="flex"
              alignItems="center"
              padding="spacing-xs"
              borderRadius="radius-xs"
              border="border-md solid stroke-secondary"
              css={css`
                background-color: var(--components-inputs-background-default);
              `}
            >
              <Text
                variant="bs-regular"
                ref={textRef}
                css={css`
                  color: var(--components-inputs-text-default);
                `}
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
        )}

        {isWalletConnected && status == 'error' && !isLoading && (
          <Box>
            <Button
              size="small"
              onClick={handleUnlockProfile}
            >
              Unlock Profile
            </Button>
          </Box>
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
