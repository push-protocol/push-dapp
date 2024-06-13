// React and other libraries
import { FC } from 'react';

// Components
import { Box } from 'blocks';
import { RecommendedSnap } from './RecommendedSnap';
import { TrendingSubscribed } from './TrendingSubscribed';

export type TrendingRecommendedProps = {};

const TrendingRecommended: FC<TrendingRecommendedProps> = () => {
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
      <TrendingSubscribed />
      <RecommendedSnap />
    </Box>
  );
};

export { TrendingRecommended };
