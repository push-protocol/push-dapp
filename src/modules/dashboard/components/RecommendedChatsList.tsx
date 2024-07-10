//Constants
import { recommendedChatList } from '../Dashboard.constants';

//Components
import { Box } from 'blocks';
import { RecommendedChatListItem } from './RecommendedChatListItem';

const RecommendedChatsList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s4"
      borderRadius="r6"
      border={{ light: '1px solid gray-200', dark: '1px solid gray-800' }}
      padding="s4"
    >
      {recommendedChatList.map((item, index) => {
        return (
          <RecommendedChatListItem
            key={`${index}`}
            chat={item}
          />
        );
      })}
    </Box>
  );
};

export { RecommendedChatsList };
