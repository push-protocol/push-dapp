// React + Web3 Essentials
import useModalBlur from "hooks/useModalBlur";
import React, { createContext, useContext, useEffect, useState } from "react";
import { PushAPI } from '@pushprotocol/restapi';


// Internal Components
import { AppContextType, Web3NameListType } from "types/context"
import { useAccount } from "hooks";
import { appConfig } from "config";
import { useDispatch } from "react-redux";
import { MdError } from "react-icons/md";
import { setUserPushSDKInstance } from "redux/slices/userSlice";
import { GlobalContext } from "./GlobalContext";
import useToast from "hooks/useToast";

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }) => {
    const { connect, provider, account, wallet, connecting } = useAccount();
    const { readOnlyWallet } = useContext(GlobalContext);
    const web3onboardToast = useToast();

    const [web3NameList, setWeb3NameList] = useState<Web3NameListType>({});

    const [snapInstalled, setSnapInstalled] = useState(false);

    const [SnapState, setSnapState] = useState(1);
    const {
        isModalOpen: isMetamaskPushSnapOpen,
        showModal: showMetamaskPushSnap,
        ModalComponent: MetamaskPushSnapModalComponent,
    } = useModalBlur();

    const dispatch = useDispatch();

    const handleConnectWallet = (showToast = false, toastMessage?: string) => {
        if(showToast) {
            web3onboardToast.showMessageToast({
                toastMessage: toastMessage || "Please connect your wallet to continue",
                toastTitle: "Connect Wallet",
                toastType: "ERROR",
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });
        }

        const onboardModal = document.getElementById("onboard-container");
        onboardModal.style.display = 'block';
        // Open the onboard modal
        connect();

        // Create a resize observer to detect when the onboard modal is rendered
        const observer = new ResizeObserver(() => {
            const sectionElement = document.querySelector('onboard-v2')?.shadowRoot?.querySelector('.svelte-baitaa');
            const divElement = sectionElement?.querySelector('div');
            if (divElement) {
                // Disconnect the observer once the divElement is found
                observer.unobserve(onboardModal);
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
        });

        // Start observing the DOM for changes
        observer.observe(onboardModal);
    }

    const initialisePushSdkGuestMode = async () => {
        let userInstance;
        userInstance = await PushAPI.initialize({
            account: readOnlyWallet,
            env: appConfig.appEnv,
        });
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
            handleConnectWallet,
            setSnapInstalled,
            snapInstalled
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider