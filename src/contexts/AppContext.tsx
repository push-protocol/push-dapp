// React + Web3 Essentials
import useModalBlur from "hooks/useModalBlur";
import React,{createContext, useState} from "react";
import { PushAPI } from '@pushprotocol/restapi';


// Internal Components
import { AppContextType, Web3NameListType } from "types/context"
import { useAccount } from "hooks";
import { appConfig } from "config";
import { useDispatch } from "react-redux";
import { setUserPushSDKInstance } from "redux/slices/userSlice";

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider=({children})=>{
    // const {connect} = useAccount();

    const [web3NameList,setWeb3NameList]=useState<Web3NameListType>({});
    const [readOnlyWallet,setReadOnlyWallet] = useState<string>();

    const [SnapState, setSnapState] = useState(1);
    const {
        isModalOpen: isMetamaskPushSnapOpen,
        showModal: showMetamaskPushSnap,
        ModalComponent: MetamaskPushSnapModalComponent,
    } = useModalBlur();

    const dispatch = useDispatch();

    // const handleConnectWallet = ()=>{
    //         const onboardModal = document.getElementById("onboard-container");
    //         onboardModal.style.display = 'block';
    //         connect();
    // }


    // const initializePushSDK = async () => {
    //     const librarySigner = provider?.getSigner(account);
    //     try {
    //       const userInstance = await PushAPI.initialize(librarySigner, {
    //           env: appConfig.appEnv, // defaults to staging
    //           account: account
    //       });

    //       console.log("User Push Sdk Instance",userInstance);
          
    //       dispatch(setUserPushSDKInstance(userInstance));
    //     } catch (error) {
    //     // Handle initialization error
    //     }
    // };

    const initializePushSDK =()=>{}

    return(
        <AppContext.Provider value={{
            web3NameList,
            setWeb3NameList,
            MetamaskPushSnapModalComponent,
            showMetamaskPushSnap,
            setSnapState,
            initializePushSDK,
            SnapState,
            readOnlyWallet,
            setReadOnlyWallet
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider