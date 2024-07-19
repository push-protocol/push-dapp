// React and other libraries
import { FC } from 'react';

// helpers
import { stakePush, stakePushMultiplier } from '../utils/stakePushArray';

// components
import { RewardsActivitiesSection } from './RewardsActivitiesSection';
import { Box } from 'blocks';
import { BonusActivities } from './BonusActivitiesSection';
import { StakePushSection } from './StakePushSection';
import { stakePush, stakePushMultiplier } from '../utils/stakePushArray';

export type RewardsActivitiesBottomSectionProps = {};

const RewardsActivitiesBottomSection: FC<RewardsActivitiesBottomSectionProps> = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-lg"
    >
      <Box
        backgroundColor="surface-primary"
        borderRadius="r4"
        display="flex"
        flexDirection="column"
        margin="spacing-xs spacing-none spacing-none spacing-none"
        padding={{ ml: 's4 s3', initial: 's6' }}
      >
        <RewardsActivitiesSection />
      </Box>

      <BonusActivities />

      <Box
        backgroundColor="surface-primary"
        borderRadius="r4"
        display="flex"
        flexDirection="column"
        padding={{ ml: 's4 s3', initial: 's6' }}
      >
        <StakePushSection
          stakeArray={stakePush}
          title="Stake Push to Earn Points"
          subtitle="Visit app.push.org/yieldv2 and stake tokens in the Fee Pool or LP Pool to redeem points."
          timeline={true}
          bottomText={true}
        />
      </Box>

      <Box
        backgroundColor="surface-primary"
        borderRadius="r4"
        display="flex"
        flexDirection="column"
        padding={{ ml: 's4 s3', initial: 's6' }}
        margin="spacing-none spacing-none spacing-md spacing-none"
      >
        <StakePushSection
          stakeArray={stakePushMultiplier}
          title="Stake Push to Earn Multipliers"
          subtitle="Visit app.push.org/yieldv2 and stake tokens in the Fee Pool or LP Pool to activate multipliers."
        />
      </Box>
    </>
  );
};

export { RewardsActivitiesBottomSection };
