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
        // Open the onboard modal
        connect();

        // Create an observer instance and apply custom styles to the divElement once it is found
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    // Check if the divElement now exists in the DOM
                    const sectionElement = document.querySelector('onboard-v2')?.shadowRoot?.querySelector('.svelte-baitaa');
                    const divElement = sectionElement?.querySelector('div');
                    if (divElement) {
                        // Disconnect the observer once the divElement is found
                        observer.disconnect();
                        // Apply custom styles
                        divElement.style.position = 'fixed';
                        divElement.style.top = '0px';
                        divElement.style.right = '0px';
                        divElement.style.height = '100vh';
                        divElement.style.left = '0px';
                        divElement.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                        divElement.style.backdropFilter = 'blur(5px)';
                    }
                }
            });
        });

        // Start observing the DOM for changes
        observer.observe(document.body, { childList: true, subtree: true });
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