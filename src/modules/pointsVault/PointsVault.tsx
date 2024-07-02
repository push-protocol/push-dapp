import { Box } from 'blocks';
import { FC, useState } from 'react';
import { PointsVaultLogin } from './components/PointsVaultLogin';
import { PointsVaultList } from './components/PointsVaultList';
import { PointsVaultComponents } from './PointsVault.types';

const PointsVault: FC = () => {
  const [activeComponent, setActiveComponent] = useState<PointsVaultComponents>('login');

  return (
    <Box
      height="100%"
      width="-webkit-fill-available"
    >
      {activeComponent === 'login' && <PointsVaultLogin handleSetActiveComponent={setActiveComponent} />}
      {activeComponent === 'list' && <PointsVaultList />}
    </Box>
  );
};

export { PointsVault };
