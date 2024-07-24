import { Box, Text } from 'blocks';
import { RewardsActivitiesList } from './RewardsActivitiesList';

const RewardsActivitiesSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s4"
    >
      <Text
        variant="h4-bold"
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        Activities
      </Text>
      <RewardsActivitiesList />
    </Box>
  );
};

export { RewardsActivitiesSection };
