// React and other libraries
import { FC } from 'react';

// Components
import { Box, Button, Chat, Link, Text } from 'blocks';

//Types
import { ChatType } from '../Dashboard.types';

export type RecommendedChatListItemProps = {
  chat: ChatType;
};
const RecommendedChatListItem: FC<RecommendedChatListItemProps> = ({ chat }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        display="flex"
        gap="spacing-xs"
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
            color="text-primary"
          >
            {chat?.payload?.chatParticipant}
          </Text>
          <Text
            variant="bs-regular"
            color="text-tertiary-inverse"
          >
            {chat?.payload?.chatMsg?.messageContent}
          </Text>
        </Box>
      </Box>
      <Link
        to={`/chat/${chat?.chatParticipantAlias}`}
        isText={false}
      >
        <Button
          size="small"
          iconOnly={<Chat />}
          variant="tertiary"
        />
      </Link>
    </Box>
  );
};

export { RecommendedChatListItem };
