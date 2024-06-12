import { FC } from 'react';
import { Box } from 'blocks';
export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  return <Box border={{ light: '1px solid black', dark: '1px solid white' }}>Dashboard</Box>;
};

export { Dashboard };
