// React + Web3 Essentials
import React, { createContext, useState } from 'react';

export const SpaceContext = createContext({
  spaceId: null,
  setSpaceId: (value: string) => {}
});

const SpaceContextProvider:React.FC<React.ReactNode> = ({children}) => {
  const [spaceId, setSpaceId] = useState<string | undefined>(null);
  
  return (
    <SpaceContext.Provider value={{ spaceId, setSpaceId }}>
      {children}
    </SpaceContext.Provider>
  )
}

export default SpaceContextProvider;