import { FC } from 'react';
import { Box } from 'blocks';
import { TrendingRecommended } from './components/TrendingRecommended';
export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  return (
    <Box>
      <TrendingRecommended />
    </Box>
  );
};

export { Dashboard };
