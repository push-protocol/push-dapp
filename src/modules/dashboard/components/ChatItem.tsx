// React and other libraries
import { FC, useContext } from 'react';

import { css } from 'styled-components';

// Components
import { Box, Button, Chat, Text } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { ChatUserAppContext } from 'types/chat';
import { Context } from 'modules/chat/ChatModule';

export type ChatItemProps = {
  chat: any;
};
const ChatItem: FC<ChatItemProps> = ({ chat }) => {
  // const { setSelectedChatId } = useContext<ChatUserAppContext>(Context);
  const { mode } = useBlocksTheme();
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
        <chat.chatPic />
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
      <Button
        // onClick={() => setSelectedChatId(chat.chatId)}
        size="small"
        iconOnly={<Chat />}
        variant="tertiary"
        css={css`
          background-color: ${mode === 'dark' ? '#484d58' : ''};
        `}
      />
    </Box>
  );
};

export { ChatItem };
