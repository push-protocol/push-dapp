import { Box } from 'blocks';
import { FC, useState } from 'react';
import { PointsVaultLogin } from './components/PointsVaultLogin';
import { PointsVaultList } from './components/PointsVaultList';

export type PointsVaultProps = {};

const PointsVault: FC<PointsVaultProps> = () => {
  const [activeComponent, setActiveComponent] = useState('login');

  return (
    <Box
      height="100%"
      width="-webkit-fill-available"
    >
      {activeComponent === 'login' && <PointsVaultLogin />}
      {activeComponent === 'list' && <PointsVaultList />}
    </Box>
  );
};

export { PointsVault };
