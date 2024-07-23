// Components
import { Box, Text } from 'blocks';

const CreateChannelHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      alignSelf="stretch"
    >

      <Text
        variant="h3-semibold"
        color='text-primary'
        display={{ ml: 'none', dp: 'block' }}
      >
        Create Your Channel
      </Text>

      <Text
        variant="bs-regular"
        color='text-tertiary'
        display={{ ml: 'none', dp: 'block' }}
      >
        Creating your own notification channel to manage, send and notify users.
      </Text>


      <Text
        variant={"h4-semibold"}
        color='text-primary'
        display={{ ml: 'block', dp: 'none' }}
      >
        Create Your Channel
      </Text>

      <Text
        variant="bes-regular"
        color='text-tertiary'
        display={{ ml: 'block', dp: 'none' }}
        textAlign='center'
      >
        Creating your own notification channel to manage, send and notify users.
      </Text>

    </Box>
  );
};

export { CreateChannelHeader };
