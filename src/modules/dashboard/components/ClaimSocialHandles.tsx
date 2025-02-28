import { FC, ReactNode } from 'react';

import { Box, Lozenge, Star, Text } from 'blocks';

export type ClaimSocialHandlesProps = {
  claimButton?: ReactNode;
};

const ClaimSocialHandles: FC<ClaimSocialHandlesProps> = ({ claimButton }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection={{ tb: 'column' }}
      gap={{ tb: 'spacing-xs' }}
      width="100%"
    >
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-sm"
        >
          <Text
            variant="h4-semibold"
            color="text-primary"
          >
            Get your favorite notifications anywhere, anytime!
          </Text>
          <Lozenge icon={<Star />}>NEW</Lozenge>
        </Box>
        <Text
          variant="bs-regular"
          color="text-tertiary"
        >
          Connect apps and receive notifications directly in your Email, Telegram and Discord
        </Text>
      </Box>
    </Box>
  );
};

export { ClaimSocialHandles };
