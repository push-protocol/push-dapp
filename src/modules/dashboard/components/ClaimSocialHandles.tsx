import { FC, ReactNode } from 'react';

import { Box, Lozenge, Multiplier, RewardsBell, Star, Text } from 'blocks';

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
            Get notified anywhere and earn points
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

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="spacing-md"
      >
        <Box
          display="flex"
          gap="spacing-xxs"
          alignItems="center"
        >
          <Multiplier
            height={28}
            width={31}
          />
          <Text
            variant="bl-semibold"
            color="text-primary"
          >
            1.5x
          </Text>
        </Box>
        <Box
          display="flex"
          gap="spacing-xxs"
          alignItems="center"
        >
          <RewardsBell
            width={24}
            height={28}
          />
          <Text
            variant="bm-semibold"
            color="text-primary"
          >
            25,000
          </Text>
        </Box>
        {claimButton}
      </Box>
    </Box>
  );
};

export { ClaimSocialHandles };
