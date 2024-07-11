// Components
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

      <Text
        variant={"h3-semibold"}
        color={{ light: 'gray-1000', dark: 'gray-100' }}
        display={{ ml: 'none', dp: 'block' }}
      >
        Create Your Channel
      </Text>

      <Text
        variant="bs-regular"
        color={{ light: 'gray-500', dark: 'gray-600' }}
        display={{ ml: 'none', dp: 'block' }}
      >
        Creating your own notification channel to manage, send and notify users.
      </Text>


      <Text
        variant={"h4-semibold"}
        color={{ light: 'gray-1000', dark: 'gray-100' }}
        display={{ ml: 'block', dp: 'none' }}
      >
        Create Your Channel
      </Text>

      <Text
        variant="bes-regular"
        color={{ light: 'gray-500', dark: 'gray-600' }}
        display={{ ml: 'block', dp: 'none' }}
        textAlign='center'
      >
        Creating your own notification channel to manage, send and notify users.
      </Text>

    </Box>
  );
};

export { CreateChannelHeader };
