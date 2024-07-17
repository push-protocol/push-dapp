import { Box, Lock, Text } from 'blocks';
import { RewardsActivitiesList } from './RewardsActivitiesList';
import { css } from 'styled-components';

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

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="spacing-xxs"
        css={css`
          &:before,
          &:after {
            content: '';
            flex: 1 1;
            border-bottom: 1px solid var(--stroke-secondary);
            margin: auto;
          }

          &:before {
            margin-right: var(--s3);
          }

          &:after {
            margin-left: var(--s3);
          }
        `}
      >
        <Lock size={28} />
        <Text
          variant="bs-semibold"
          color="text-tertiary"
        >
          Verify X and Discord to unlock more activities
        </Text>
      </Box>

      {/* add hr */}

      {/* update activities */}
    </Box>
  );
};

export { RewardsActivitiesSection };
