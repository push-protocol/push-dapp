import { Box, Text } from 'blocks';
import { RewardsActivitiesList } from './RewardsActivitiesList';

const RewardsActivitiesSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
    >
      <Text
        variant="h4-bold"
        color="text-primary"
      >
        Activities
      </Text>
      <RewardsActivitiesList />
    </Box>
  );
};

export { RewardsActivitiesSection };
