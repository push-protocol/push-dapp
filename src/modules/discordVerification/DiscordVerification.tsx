import { Box, Button, Discord, Text } from 'blocks';
import { useDiscordSession } from 'modules/rewards/hooks/useDiscordSession';
import { useGetUserDiscordDetails } from 'queries';

const DiscordVerification = () => {
  const params = new URLSearchParams(location.hash.substring(1));
  const access_token = params.get('access_token');

  useDiscordSession();

  const token = localStorage.getItem('access_token');

  const { data: userDiscordDetails } = useGetUserDiscordDetails(token as string);

  const handleContinueVerification = () => {
    if (userDiscordDetails) {
      localStorage.setItem('username', userDiscordDetails.username);
      window.close();
    }
  };

  if (!access_token) {
    window.close();
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      height="calc(100vh - 140px)"
    >
      <Box
        display="flex"
        padding="spacing-md"
        flexDirection="column"
        alignItems="center"
        width="360px"
        gap="spacing-xs"
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        border="border-sm solid stroke-secondary"
      >
        <Discord
          width={48}
          height={48}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text
            variant="h4-semibold"
            color="text-primary"
          >
            Complete Verification
          </Text>
          <Text
            variant="bs-regular"
            color="text-tertiary"
          >
            Continue to complete the verification process.
          </Text>
        </Box>

        <Button onClick={handleContinueVerification}>Continue</Button>
      </Box>
    </Box>
  );
};

export { DiscordVerification };
