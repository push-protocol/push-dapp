// React and other libraries
import { FC } from 'react';

// Components
import { Box, IllustrationWrapper, Text } from 'blocks';

export type ChatItemProps = {
  chat: any;
};
const ChatItem: FC<ChatItemProps> = ({ chat }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        gap="s3"
        justifyContent="center"
      >
        <IllustrationWrapper
          height={48}
          width={48}
          componentName={chat.chatParticipant}
          illustration={<img src={chat.chatPic} />}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text
            variant="h5-semibold"
            color={{ light: 'gray-1000', dark: 'white' }}
          >
            {chat?.chatParticipant}
          </Text>
          <Text
            variant="c-regular"
            color={{ light: 'gray-600', dark: 'gray-500' }}
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
