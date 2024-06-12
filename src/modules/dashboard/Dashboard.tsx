import { FC } from 'react';
import { Box } from 'blocks';
export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  return <Box border={{ light: '1px solid var(--black)', dark: '1px solid var(--white)' }}>Dashboard</Box>;
};

export { Dashboard };
