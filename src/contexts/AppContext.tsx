// React + Web3 Essentials
import useModalBlur from "hooks/useModalBlur";
import React,{createContext,useState} from "react"

// Internal Components
import { AppContextType, Web3NameListType } from "types/context"

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider=({children})=>{
    const [web3NameList,setWeb3NameList]=useState<Web3NameListType>({});

    const {
        isModalOpen: isMetamaskPushSnapOpen,
        showModal: showMetamaskPushSnap,
        ModalComponent: MetamaskPushSnapModalComponent,
    } = useModalBlur();

    return(
        <AppContext.Provider value={{web3NameList,setWeb3NameList,MetamaskPushSnapModalComponent,showMetamaskPushSnap}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider