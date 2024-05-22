// React + Web3 Essentials
import { createContext, useEffect, useState, FC, ReactNode } from 'react';

// External imports
import * as PushAPI from '@pushprotocol/restapi';

// Internal Components imports
import { appConfig } from 'config/index.js';
import { useAccount } from 'hooks';

export const SpaceContext = createContext({
  spaceId: null,
  setSpaceId: (value: string) => {},
  spaceInvites: 0,
});

const SpaceContextProvider: FC<ReactNode> = ({ children }) => {
  const [spaceId, setSpaceId] = useState<string | undefined>(null);
  const [spaceInvites, setSpaceInvites] = useState<number>(0);
  const { account } = useAccount();

  const getSpaceInvitesCount = async () => {
    const feed = await PushAPI.space.requests({
      account,
      env: appConfig.appEnv,
    });
    return feed?.length;
  };

  useEffect(() => {
    if (!account) return;

    (async function () {
      const count = await getSpaceInvitesCount();
      setSpaceInvites(count);
    })();
  }, [account]);

  return <SpaceContext.Provider value={{ spaceId, setSpaceId, spaceInvites }}>{children}</SpaceContext.Provider>;
};

export default SpaceContextProvider;
