// // React + Web3 Essentials
// import React, { createContext, useState } from 'react'
// import { BlockedLoadingI } from 'types/chat';

// export const ChatTempContext = createContext({
//   pgpPvtKey: null,
 
//   setPgpPvtKey: (value: any) => {},
// });

// const ChatTempContextProvider = (props) => {
//   const [pgpPvtKey, setPgpPvtKey] = useState(null);
  
//   return (
//     <ChatTempContext.Provider value={{ pgpPvtKey, setPgpPvtKey }}>
//       {props.children}
//     </ChatTempContext.Provider>
//   )
// }

// export default ChatTempContextProvider;