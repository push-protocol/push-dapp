// Third-party libraries
import { css } from 'styled-components';

// Components
import { Box, Text, Button, Link, Points } from 'blocks';

const RewardsSection = () => {
  return (
    <Box
      display="flex"
      gap="s3"
      borderRadius="r6"
      padding="s4"
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
        gap="s3"
      >
        <Points svgProps={{ width: 60, height: 56 }} />
        <Text
          variant="h5-semibold"
          display={{ ml: 'none', dp: 'block' }}
        >
          Complete Tasks on Push. Earn Reward Points.
        </Text>
        <Text
          variant="h5-semibold"
          display={{ ml: 'block', dp: 'none' }}
          textAlign="center"
        >
          Complete Tasks on Push. Earn Reward Points.
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
