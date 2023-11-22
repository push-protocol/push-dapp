// React + Web3 Essentials
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

// External imports
import * as PushAPI from '@pushprotocol/restapi';

// Internal Components imports
import { appConfig } from 'config';
import { useAccount } from 'hooks';

export const SpaceContext = createContext({
  spaceId: null,
  setSpaceId: (value: string) => {},
  spaceInvites: 0,
});

const SpaceContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [spaceId, setSpaceId] = useState<string | undefined>(null);
  const [spaceInvites, setSpaceInvites] = useState<number>(0);
  const { account } = useAccount();

  const getSpaceInvitesCount = async () => {
    const feed = await PushAPI.space.requests({
      account,
      env: appConfig.appEnv,
    });
    return feed?.length
  }

  useEffect(async() => {
    if (!account) return;

    const count = await getSpaceInvitesCount();
    setSpaceInvites(count);

  }, [account]);

  return <SpaceContext.Provider value={{ spaceId, setSpaceId, spaceInvites }}>{children}</SpaceContext.Provider>;
};

export default SpaceContextProvider;
