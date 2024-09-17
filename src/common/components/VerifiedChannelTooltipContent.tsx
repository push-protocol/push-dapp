// Components
import { Box, Text, PushLogo } from 'blocks';

export const VerifiedChannelTooltipContent = () => {
  return (
    <Box
      display="flex"
      gap="spacing-xxs"
      padding="spacing-xxxs"
    >
      <Text
        color="text-primary-inverse"
        variant="bs-semibold"
      >
        Verified By:{' '}
      </Text>
      <Box
        display="flex"
        gap="spacing-xxs"
        alignItems="center"
      >
        <PushLogo
          width={16}
          height={16}
        />
        <Text color="text-primary-inverse">Push Admin</Text>
      </Box>
    </Box>
  );
};
