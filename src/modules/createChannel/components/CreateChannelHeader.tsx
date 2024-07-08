import { Box, Text } from 'blocks';

const CreateChannelHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="s1"
      alignSelf="stretch"
    >

      <Text variant="h3-semibold">
        Create Your Channel
      </Text>

      <Text variant="bs-regular" color='gray-500'>
        Creating your own notification channel to manage, send and notify users.
      </Text>

    </Box>
  );
};

export { CreateChannelHeader };
