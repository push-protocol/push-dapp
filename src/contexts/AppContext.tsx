// React + Web3 Essentials
import React,{createContext,useState} from "react"

// Internal Components
import { AppContextType, Web3NameListType } from "types/context"

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider=({children})=>{
    const [web3NameList,setWeb3NameList]=useState<Web3NameListType>({})

    return(
        <AppContext.Provider value={{web3NameList,setWeb3NameList}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider