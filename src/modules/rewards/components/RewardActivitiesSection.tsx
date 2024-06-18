import { css } from 'styled-components';
import { Box, Text } from 'blocks';
import { RewardActivitiesList } from './RewardActivitiesList';

const RewardActivitiesSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s1"
    >
      <Text
        variant="h4-bold"
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        Activities
      </Text>

      <RewardActivitiesList />
    </Box>
  );
};

export { RewardActivitiesSection };
