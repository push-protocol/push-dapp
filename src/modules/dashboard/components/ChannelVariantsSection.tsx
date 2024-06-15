// React and other libraries
import { FC } from 'react';

// Components
import { Box } from 'blocks';
import { ChannelTabsSection } from './ChannelTabsSection';
import { RecommendedChatAndSnapSection } from './RecommendedChatAndSnapSection';

export type ChannelVariantsSectionProps = {};

const ChannelVariantsSection: FC<ChannelVariantsSectionProps> = () => {
  return (
    <Box
      backgroundColor={{ dark: 'gray-900', light: 'white' }}
      borderRadius="var(--r6)"
      padding="s6"
      display="flex"
      gap="s6"
      flexDirection={{ ml: 'column' }}
      justifyContent="space-between"
    >
      <ChannelTabsSection />
      <RecommendedChatAndSnapSection />
    </Box>
  );
};

export { ChannelVariantsSection };
