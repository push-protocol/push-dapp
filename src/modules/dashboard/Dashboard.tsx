import { FC } from 'react';
import { Box } from 'blocks';
import { TrendingRecommended } from './components/TrendingRecommended';
export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  return (
    <Box margin="s6">
      <TrendingRecommended />
    </Box>
  );
};

export { Dashboard };
