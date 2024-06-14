// Third-party libraries
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

//Constants
import { RecommendedChatList } from '../Dashboard.constants';

// Components
import { Box, Text, Button } from 'blocks';
import { ChatItem } from './ChatItem';
import Metamask from 'blocks/illustrations/components/Metamask';

const RecommendedSnap = () => {
  const navigate = useNavigate();

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
        border={{ light: '1px solid gray-200', dark: '1px solid gray-800' }}
        padding="s4"
      >
        {RecommendedChatList.map((item, index) => {
          return (
            <ChatItem
              key={index}
              chat={item}
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
          alignItems="center"
          gap="s3"
        >
          <Metamask />
          <Text
            variant="h5-semibold"
            display={{ ml: 'none', dp: 'block' }}
          >
            Receive Instant Notifications in Metamask with Push Snap.
          </Text>
          <Text
            variant="h5-semibold"
            display={{ ml: 'block', dp: 'none' }}
            textAlign="center"
          >
            Receive Instant Notifications in Metamask with Push Snap.
          </Text>
        </Box>
        <Button
          variant="tertiary"
          size="small"
          onClick={() => navigate('/snap')}
        >
          Get Push Snap
        </Button>
      </Box>
    </Box>
  );
};

export { RecommendedSnap };
