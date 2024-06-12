// React and other libraries
import { FC } from 'react';

// Components
import { Box, Text } from 'blocks';

export type ChatItemProps = {
  chat: any;
};
const ChatItem: FC<ChatItemProps> = ({ chat }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
    >
      <Box display="flex">
        <Box
          width="40px"
          height="40px"
        ></Box>
        <Box
          display="flex"
          flexDirection="column"
        >
          <Text
            variant="h5-semibold"
            color="gray-1000"
          >
            {chat?.chatParticipant}
          </Text>
          <Text
            variant="c-regular"
            color="gray-600"
          >
            {chat?.chatMsg?.messageContent}
          </Text>
        </Box>
      </Box>
      <Box
        width="40px"
        height="40px"
      ></Box>
    </Box>
  );
};

export { ChatItem };
