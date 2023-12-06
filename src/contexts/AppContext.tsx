// React + Web3 Essentials
import useModalBlur from "hooks/useModalBlur";
import React, { createContext, useContext, useEffect, useState } from "react";
import { PushAPI } from '@pushprotocol/restapi';


// Internal Components
import { AppContextType, Web3NameListType } from "types/context"
import { useAccount } from "hooks";
import { appConfig } from "config";
import { useDispatch } from "react-redux";
import { setUserPushSDKInstance } from "redux/slices/userSlice";
import { GlobalContext } from "./GlobalContext";

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }) => {
    const { connect, provider, account, wallet, connecting } = useAccount();
    const { readOnlyWallet } = useContext(GlobalContext);

    const [web3NameList, setWeb3NameList] = useState<Web3NameListType>({});

    const [SnapState, setSnapState] = useState(1);
    const {
        isModalOpen: isMetamaskPushSnapOpen,
        showModal: showMetamaskPushSnap,
        ModalComponent: MetamaskPushSnapModalComponent,
    } = useModalBlur();

    const dispatch = useDispatch();

    const handleConnectWallet = () => {
        const onboardModal = document.getElementById("onboard-container");
        onboardModal.style.display = 'block';
        connect();
    }

    const initialisePushSdkGuestMode = async () => {
        let userInstance;
        userInstance = await PushAPI.initialize({
            account: readOnlyWallet,
            env: appConfig.appEnv,
        });
        console.log("User Instance in guest mode", userInstance);

        dispatch(setUserPushSDKInstance(userInstance));
    }

    const initializePushSDK = async () => {
        console.log("Initialising Push Sdk")
        let userInstance;
        try {
            const librarySigner = provider?.getSigner(account);
            userInstance = await PushAPI.initialize(librarySigner, {
                env: appConfig.appEnv,  // defaults to staging
                account: account
            });

            console.log("User Instance", userInstance);

            dispatch(setUserPushSDKInstance(userInstance));
        } catch (error) {
            // Handle initialization error
            console.log("Errror !!!!!", error);
        }
    };

    useEffect(() => {
        const librarySigner = provider?.getSigner(account);
        if (!account || !appConfig?.appEnv) return;
        if (wallet?.accounts?.length > 0) {
            initializePushSDK();
        } else {
            initialisePushSdkGuestMode();
        }
    }, [account, provider, wallet]);

    return (
        <AppContext.Provider value={{
            web3NameList,
            setWeb3NameList,
            MetamaskPushSnapModalComponent,
            showMetamaskPushSnap,
            setSnapState,
            initializePushSDK,
            SnapState,
            handleConnectWallet
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider