// Third-party libraries
import { css } from 'styled-components';

// Components
import { Box, Text, Button, Link, Metamask } from 'blocks';

const SnapSection = () => {
  return (
    <Box
      display="flex"
      gap="s3"
      borderRadius="var(--r6)"
      padding="s4"
      alignItems="center"
      flexDirection={{ ml: 'column' }}
      justifyContent="space-between"
      css={css`
        background: radial-gradient(174.95% 108.75% at 64.27% 0%, #f2befb 0%, #ffd7c0 100%);
      `}
    >
      <Box
        display="flex"
        flexDirection={{ ml: 'column' }}
        alignItems="center"
        gap="s3"
      >
        <Metamask />
        <Text
          variant="h5-semibold"
          display={{ ml: 'none', dp: 'block' }}
        >
          Receive Instant Notifications in Metamask with Push Snap.
        </Text>
        <Text
          variant="h5-semibold"
          display={{ ml: 'block', dp: 'none' }}
          textAlign="center"
        >
          Receive Instant Notifications in Metamask with Push Snap.
        </Text>
      </Box>
      <Link to={'/snap'}>
        <Button
          variant="tertiary"
          size="small"
        >
          Get Push Snap
        </Button>
      </Link>
    </Box>
  );
};

export { SnapSection };
