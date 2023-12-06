import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export type GlobalContextType = {
    readOnlyWallet:any,
    setReadOnlyWallet:any,
    setIsGuestMode:any,
    isGuestMode:any
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({children})=>{

    const { userPushSDKInstance } = useSelector((state: any) => {
        return state.user;
      });

    const [readOnlyWallet, setReadOnlyWallet] = useState<string>();
    const [isGuestMode,setIsGuestMode] = useState<boolean>(false);

    const checkIfUserhasSigner = async()=>{
        console.log("User Push sdk Instance",userPushSDKInstance);

        if(userPushSDKInstance?.signer){
            return true;
        }else{
            return false;
        }

    }

    return(
        <GlobalContext.Provider value={{
            setReadOnlyWallet,
            readOnlyWallet,
            setIsGuestMode,
            isGuestMode
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
