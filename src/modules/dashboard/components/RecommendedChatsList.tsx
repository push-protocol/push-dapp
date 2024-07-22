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
      gap="spacing-sm"
      borderRadius="radius-md"
      border="border-sm solid stroke-secondary"
      padding="spacing-sm"
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
