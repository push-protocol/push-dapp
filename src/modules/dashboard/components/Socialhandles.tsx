import { FC, ReactNode } from 'react';

import { BlocksSpaceType, Box, ResponsiveProp } from 'blocks';
import { ClaimSocialHandles } from './ClaimSocialHandles';
import { ConnectSocialHandles } from './ConnectSocialHandles';

export type SocialHandlesProps = {
  errorMessage?: string;
  setErrorMessage: (errorMessage: string) => void;
  successMessage?: string;
  setSuccessMessage: (successMessage: string) => void;
  padding?: ResponsiveProp<BlocksSpaceType>;
  claimButton?: ReactNode;
};

const SocialHandles: FC<SocialHandlesProps> = ({ setErrorMessage, setSuccessMessage, padding, claimButton }) => {
  return (
    <Box
      borderRadius="radius-md"
      padding={padding}
      display="flex"
      flexDirection="column"
      backgroundColor="surface-primary"
      gap="spacing-md"
      alignItems="flex-start"
    >
      {/* Render Claim based on Social Handles if wallet is connected */}
      <ClaimSocialHandles claimButton={claimButton} />

      {/* Render option to connect Social Handles */}
      <ConnectSocialHandles
        setErrorMessage={setErrorMessage}
        setSuccessMessage={setSuccessMessage}
      />
    </Box>
  );
};

export { SocialHandles };
