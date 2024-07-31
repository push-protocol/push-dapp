import { Box } from 'blocks';
import { FC, useState } from 'react';
import { PointsVaultLogin } from './components/PointsVaultLogin';
import { PointsVaultListContainer } from './components/PointsVaultListContainer';
import { PointsVaultView } from './PointsVault.types';

const PointsVault: FC = () => {
  const [activeView, setActiveView] = useState<PointsVaultView>('login');

  return (
    <Box
      height="100%"
      width="-webkit-fill-available"
    >
      {activeView === 'login' && <PointsVaultLogin handleSetActiveView={setActiveView} />}
      {activeView === 'list' && <PointsVaultListContainer />}
    </Box>
  );
};

export { PointsVault };
