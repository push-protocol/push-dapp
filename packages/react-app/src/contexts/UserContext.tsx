import { DID } from 'dids';
import { createContext, useState } from 'react';

export const UserContext = createContext({
  did: null,
  setDid: (value: DID) => {}
});

const UserContextProvider = (props) => {
  const [did, setDid] = useState<DID>()
  
  return (
    <UserContext.Provider value={{ did, setDid }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;