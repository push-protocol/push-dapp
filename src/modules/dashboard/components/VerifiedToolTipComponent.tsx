// Components
import { Box, Text } from 'blocks';
import PushLogo from 'blocks/illustrations/components/PushLogo';

export const VerifiedToolTipContent = () => {
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
