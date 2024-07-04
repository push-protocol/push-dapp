// React and other libraries
import { FC } from 'react';

// Components
import { Box, Text } from 'blocks';
import { ChannelTabsSection } from './ChannelTabsSection';
import { RewardsSection } from './RewardsSection';
import { RecommendedChatsList } from './RecommendedChatsList';

export type ChannelVariantsSectionProps = {};

const ChannelVariantsSection: FC<ChannelVariantsSectionProps> = () => {
  return (
    <Box
      backgroundColor={{ dark: 'gray-900', light: 'white' }}
      borderRadius="r6"
      padding="s6"
      display="flex"
      gap="s6"
      flexDirection={{ ml: 'column' }}
      justifyContent="space-between"
    >
      <ChannelTabsSection />
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
        <RecommendedChatsList />
        <RewardsSection />
      </Box>
    </Box>
  );
};

export { ChannelVariantsSection };
