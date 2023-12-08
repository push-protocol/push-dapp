// External Packages
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Internal Configs
import APP_PATHS from 'config/AppPaths';

// Internal Components
import { GlobalContext } from 'contexts/GlobalContext';

const ConnectedWalletRoute = () => {
  const { readOnlyWallet } = useContext(GlobalContext);

  return readOnlyWallet ? (
    <Navigate
      to={APP_PATHS.Channels}
      replace
    />
  ) : (
    <Outlet />
  );
};

export default ConnectedWalletRoute;
