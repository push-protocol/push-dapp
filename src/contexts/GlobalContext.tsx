import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export type GlobalContextType = {
    readOnlyWallet:any,
    setReadOnlyWallet:any,
    setMode:(getMode:string)=>void,
    getMode:string
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({children})=>{

    const { userPushSDKInstance } = useSelector((state: any) => {
        return state.user;
      });

    const [readOnlyWallet, setReadOnlyWallet] = useState<string>();
    const [getMode,setMode] = useState<string>('');

    return(
        <GlobalContext.Provider value={{
            setReadOnlyWallet,
            readOnlyWallet,
            setMode,
            getMode
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
