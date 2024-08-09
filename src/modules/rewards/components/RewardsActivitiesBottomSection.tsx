// React and other libraries
import { FC } from 'react';

// components
import { RewardsActivitiesSection } from './RewardsActivitiesSection';
import { Box } from 'blocks';
import { BonusActivities } from './BonusActivitiesSection';

export type RewardsActivitiesBottomSectionProps = {};

const RewardsActivitiesBottomSection: FC<RewardsActivitiesBottomSectionProps> = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-lg"
      margin="spacing-none spacing-none spacing-md spacing-none"
    >
      <Box
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        margin="spacing-xs spacing-none spacing-none spacing-none"
        padding={{ ml: 'spacing-sm', initial: 'spacing-md' }}
      >
        <RewardsActivitiesSection />
      </Box>

      <BonusActivities />

      {/* <Box
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        padding={{ ml: 'spacing-sm', initial: 'spacing-md' }}
      >
        <StakePushSection
          stakeArray={stakePush}
          title="Stake Push to Earn Points"
          subtitle="Visit [app.push.org/yieldv2](https://app.push.org/yieldv2) and stake tokens in the Fee Pool or LP Pool to redeem points."
          timeline={true}
          bottomText={true}
        />
      </Box>

      <Box
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        padding={{ ml: 'spacing-sm', initial: 'spacing-md' }}
        margin="spacing-none spacing-none spacing-md spacing-none"
      >
        <StakePushSection
          stakeArray={stakePushMultiplier}
          title="Stake Push to Earn Multipliers"
          subtitle="Visit [app.push.org/yieldv2](https://app.push.org/yieldv2) and stake tokens in the Fee Pool or LP Pool to activate multipliers."
        />
      </Box> */}
    </Box>
  );
};

export { RewardsActivitiesBottomSection };
