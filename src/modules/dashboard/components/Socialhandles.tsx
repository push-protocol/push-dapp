import { FC } from 'react';

import { Box } from 'blocks';
import { ClaimSocialHandles } from './ClaimSocialHandles';
import { ConnectSocialHandles } from './ConnectSocialHandles';
import { useAccount } from 'hooks';

export type SocialHandlesProps = {};

const SocialHandles: FC<SocialHandlesProps> = () => {
  const { isWalletConnected } = useAccount();

  // Check if the wallet is connected to the DApp.
  // If not, return null. If connected, return SocialHandles.
  if (!isWalletConnected) return null;

  return (
    <Box
      borderRadius="radius-md"
      padding={{ ml: 'spacing-md spacing-sm', initial: 'spacing-md' }}
      display="flex"
      flexDirection="column"
      backgroundColor="surface-primary"
      gap="spacing-md"
      alignItems="flex-start"
    >
      {/* Render Claim based on Social Handles if wallet is connected */}
      <ClaimSocialHandles />

      {/* Render option to connect Social Handles */}
      <ConnectSocialHandles />
    </Box>
  );
};

export { SocialHandles };
