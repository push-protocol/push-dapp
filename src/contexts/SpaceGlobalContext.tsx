
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Spaces, UserSpaces } from 'types';


type SpaceGlobalContextType = {
  userSpaces: UserSpaces,
  setSpaces: (chats:Spaces, id:string) => void,
  setSpaceRequests: (requests:Spaces,id:string) => void,
  joinedSpaceId: string,
  setJoinedSpaceId: (value:string) => void,
}
export const SpaceGlobalContext = createContext<SpaceGlobalContextType>({} as SpaceGlobalContextType);

export const SpaceGlobalContextProvider = (props) => {
  const [userSpaces, setUserSpaces] = useState<UserSpaces>({});
  const [joinedSpaceId,setJoinedSpaceId]=useState<string>("0xsdsfsdfsdf")
  
  const setSpaces = (spaces:Spaces, id:string) => {
    setUserSpaces(prevUserFeeds => ({
        ...prevUserFeeds,
        [id]: { ...prevUserFeeds[id], spaces:spaces}
    }));
  }
  
  const setSpaceRequests = (spaceRequests:Spaces, id:string) => {
    setUserSpaces(prevUserFeeds => ({
        ...prevUserFeeds,
        [id]: { ...prevUserFeeds[id], spaceRequests:spaceRequests}
    }));
  }

  return (
    <SpaceGlobalContext.Provider value={{ 
      userSpaces,
      setSpaceRequests,
      setSpaces,
      joinedSpaceId,
      setJoinedSpaceId
      }}>
      {props.children}
    </SpaceGlobalContext.Provider>
  );

}
