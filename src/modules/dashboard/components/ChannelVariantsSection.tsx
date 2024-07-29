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
      backgroundColor="surface-primary"
      borderRadius="radius-md"
      padding="spacing-md"
      display="flex"
      gap="spacing-md"
      flexDirection={{ ml: 'column' }}
      justifyContent="space-between"
    >
      <ChannelTabsSection />
      <Box
        display="flex"
        flexDirection="column"
        width={{ ml: '100%', initial: '50%' }}
        gap="spacing-md"
      >
        <Text
          color="text-primary"
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
