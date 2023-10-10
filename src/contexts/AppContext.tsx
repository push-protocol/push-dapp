// React + Web3 Essentials
import useModalBlur from "hooks/useModalBlur";
import React,{createContext,useEffect,useMemo,useState} from "react";

// External Packages
import { PushAPI } from "@pushprotocol/restapi";

// Internal Components
import { AppContextType, Web3NameListType } from "types/context"
import { appConfig } from "config";
import { useAccount } from "hooks";

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider=({children})=>{
    const [web3NameList,setWeb3NameList]=useState<Web3NameListType>({});
    const [userPushSDKInstance, setUserPushSDKInstance] = useState<PushAPI>(null);
    const {account, provider} = useAccount();

    const [SnapState, setSnapState] = useState(1);
    const {
        isModalOpen: isMetamaskPushSnapOpen,
        showModal: showMetamaskPushSnap,
        ModalComponent: MetamaskPushSnapModalComponent,
    } = useModalBlur();

    useEffect(() => {
        const librarySigner = provider?.getSigner(account);
        if(!account || !librarySigner || !appConfig?.appEnv) return;

        const initializePushSDK = async () => {
            try {
            const userInstance = await PushAPI.initialize(librarySigner, {
                env: appConfig.appEnv, // defaults to staging
                account: account
            });
            
            setUserPushSDKInstance(userInstance);
            } catch (error) {
            // Handle initialization error
            }
        };
        
        initializePushSDK();
    }, [account, appConfig?.appEnv, provider]);

    return(
        <AppContext.Provider value={{
            web3NameList,
            setWeb3NameList,
            userPushSDKInstance,
            MetamaskPushSnapModalComponent,
            showMetamaskPushSnap,
            setSnapState,
            SnapState
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider