import { Box, Button, ProgressBar, Sale, Text } from 'blocks';
import { css } from 'styled-components';

export const UpgradePlanNavigationItem = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      backgroundColor="surface-primary"
      padding="spacing-xs"
      borderRadius="radius-xs"
      gap="spacing-xs"
      css={css`
        box-sizing: border-box;
      `}
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          color="text-primary"
          variant="h6-bold"
        >
          Free Plan
        </Text>
        <Button
          leadingIcon={<Sale />}
          size="extraSmall"
          variant="secondary"
        >
          Upgrade
        </Button>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xxs"
        width="100%"
      >
        <Text
          color="text-secondary"
          variant="c-regular"
        >
          Monthly Web2 Notifications
        </Text>

        <ProgressBar
          progress={30}
          max={100}
        />

        <Text
          color="text-secondary"
          variant="c-regular"
        >
          100 remaining
        </Text>
      </Box>
    </Box>
  );
};
