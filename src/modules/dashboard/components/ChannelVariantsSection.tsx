// React and other libraries
import { FC } from 'react';

// Components
import { Box } from 'blocks';
import { RecommendedChatAndSnapSection } from './RecommendedChatAndSnapSection';
import { TrendingAndSubscribedTabsSection } from './TrendingAndSubscribedTabsSection';

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
      <TrendingAndSubscribedTabsSection />
      <RecommendedChatAndSnapSection />
    </Box>
  );
};

export { ChannelVariantsSection };
