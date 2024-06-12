// Third-party libraries
import { css } from 'styled-components';

// Components
import RecommendedChatLists from 'config/RecommendedChatsList';
import { Box, Text, Button } from 'blocks';
import { ChatItem } from './ChatItem';

const RecommendedSnap = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ ml: '100%', initial: '50%' }}
      gap="s6"
    >
      <Text
        color={{ light: 'gray-1000', dark: 'white' }}
        variant="h4-bold"
      >
        Recommended Chats
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        gap="s4"
        borderRadius="var(--r6)"
        border="1px solid #E5E5E5"
        padding="s4"
      >
        {RecommendedChatLists.map((item, index) => {
          return (
            <ChatItem
              key={index}
              chat={item.payload}
            />
          );
        })}
      </Box>
      <Box
        display="flex"
        gap="s3"
        borderRadius="var(--r6)"
        padding="s4"
        alignItems="center"
        flexDirection={{ ml: 'column' }}
        justifyContent="space-between"
        css={css`
          background: radial-gradient(174.95% 108.75% at 64.27% 0%, #f2befb 0%, #ffd7c0 100%);
        `}
      >
        <Box
          display="flex"
          flexDirection={{ ml: 'column' }}
          alignItems={{ ml: 'center' }}
        >
          <Box
            width="42px"
            height="39px"
          ></Box>
          <Text variant="h5-semibold">Receive Instant Notifications in Metamask with Push Snap.</Text>
        </Box>
        <Button
          variant={'tertiary'}
          size="small"
        >
          Get Push Snap
        </Button>
      </Box>
    </Box>
  );
};

export { RecommendedSnap };
