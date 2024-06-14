// React and other libraries
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Box, Button, Chat, Text } from 'blocks';
import { ChatType } from '../Dashboard.types';

export type ChatItemProps = {
  chat: ChatType;
};
const ChatItem: FC<ChatItemProps> = ({ chat }) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        display="flex"
        gap="s3"
        justifyContent="center"
      >
        <chat.payload.chatPic />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text
            variant="h5-semibold"
            color={{ light: 'gray-1000', dark: 'white' }}
          >
            {chat?.payload?.chatParticipant}
          </Text>
          <Text
            variant="c-regular"
            color={{ light: 'gray-600', dark: 'gray-500' }}
          >
            {chat?.payload?.chatMsg?.messageContent}
          </Text>
        </Box>
      </Box>
      <Button
        onClick={() => navigate(`/chat/${chat?.previewLink}`)}
        size="small"
        iconOnly={<Chat />}
        variant="tertiary"
      />
    </Box>
  );
};

export { ChatItem };
