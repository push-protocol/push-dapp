// Third-party libraries
import { css } from 'styled-components';

// Components
import { Box, Text, Button, Link, Points } from 'blocks';

const RewardsSection = () => {
  return (
    <Box
      display="flex"
      gap="spacing-xs"
      borderRadius="radius-md"
      padding="spacing-sm"
      alignItems="center"
      flexDirection={{ ml: 'column' }}
      justifyContent="space-between"
      css={css`
        background: radial-gradient(circle, rgba(222, 190, 255, 1) 0%, rgba(192, 255, 247, 1) 85%);
      `}
    >
      <Box
        display="flex"
        flexDirection={{ ml: 'column' }}
        alignItems="center"
        gap="spacing-xs"
      >
        <Points svgProps={{ width: 60, height: 56 }} />
        <Text
          variant="h5-semibold"
          display={{ ml: 'none', initial: 'block' }}
          color="text-on-light-bg"
        >
          Complete Tasks on Push. Earn Push Points and Unlock Rewards.
        </Text>
        <Text
          variant="h5-semibold"
          display={{ ml: 'block', initial: 'none' }}
          textAlign="center"
          color="text-on-light-bg"
        >
          Complete Tasks on Push. Earn Push Points and Unlock Rewards.
        </Text>
      </Box>
      <Link to={'/points'}>
        <Button
          variant="tertiary"
          size="small"
        >
          Points Dashboard
        </Button>
      </Link>
    </Box>
  );
};

export { RewardsSection };
