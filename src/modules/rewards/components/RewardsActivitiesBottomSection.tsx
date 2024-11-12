// React and other libraries
import { FC } from 'react';

// components
import { RewardsActivitiesSection } from './RewardsActivitiesSection';
import { Box } from 'blocks';
import { BonusActivities } from './BonusActivitiesSection';
import { StakePushSection } from './StakePushSection';

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

      <Box
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        padding={{ ml: 'spacing-sm', initial: 'spacing-md' }}
      >
        <StakePushSection
          title="Stake Push to Earn Points"
          subtitle="Visit [app.push.org/yield](https://app.push.org/yield) and stake tokens in the Fee Pool or LP Pool to redeem points."
          timeline={true}
        />
      </Box>

      <Box
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        padding={{ ml: 'spacing-sm', initial: 'spacing-md' }}
      >
        <StakePushSection
          lifeTime={true}
          title="Stake Push to Earn Multipliers"
          subtitle="Visit [app.push.org/yield](https://app.push.org/yield) and stake tokens in the Fee Pool or LP Pool to activate multipliers."
        />
      </Box>

      <BonusActivities />
    </Box>
  );
};

export { RewardsActivitiesBottomSection };
