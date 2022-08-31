import React, { createContext, useState } from 'react'

export const ChatContext = createContext({
  navigationSetup: null,
  setNavigationSetup: (value: any) => {}
});

const ChatContextProvider = (props) => {
  const [navigationSetup, setNavigationSetup] = useState(null);
  
  return (
    <ChatContext.Provider value={{ navigationSetup, setNavigationSetup }}>
      {props.children}
    </ChatContext.Provider>
  )
}

export default ChatContextProvider;