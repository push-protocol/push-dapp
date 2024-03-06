// React + Web3 Essentials
import React, { useContext, useMemo, useState } from "react";

// External Packages
import styled, { css, useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import * as PushAPI from "@pushprotocol/restapi";

// Internal Components
import { DropdownBtnHandler } from "./DropdownBtnHandler";
import UpdateNotifSettingDropdown from "./UpdateNotifSettingDropdown";

// Internal Configs
import { ImageV2, SpanV2 } from "components/reusables/SharedStylingV2";
import { useAccount } from "hooks";
import { AppContext } from "contexts/AppContext";
import useToast from "hooks/useToast";
import { appConfig } from "config";
import { MdCheckCircle, MdError } from "react-icons/md";
import LoaderSpinner, { LOADER_TYPE } from "components/reusables/loaders/LoaderSpinner";
import { convertAddressToAddrCaip } from "helpers/CaipHelper";
import { ChannelSetting, UserSetting } from "helpers/channel/types";
import { removeUserSetting, updateSubscriptionStatus } from "redux/slices/channelSlice";

interface ManageNotifSettingDropdownProps {
  children: React.ReactNode;
  centerOnMobile: boolean;
  channelDetail: any;
  userSetting?: UserSetting[];
  onSuccessOptout: () => void;
}

interface ManageNotifSettingDropdownContainerProps {
  centerOnMobile: boolean;
  userSetting?: UserSetting[];
  channelSetting?: ChannelSetting[];
  channelDetail: any;
  optOutHandler: (options: { setLoading?: React.Dispatch<React.SetStateAction<boolean>> }) => Promise<void>;
  closeDropdown: () => void;
}

const ManageNotifSettingDropdownContainer: React.FC<ManageNotifSettingDropdownContainerProps> = ({
  centerOnMobile,
  optOutHandler,
  channelSetting,
  channelDetail,
  userSetting,
  closeDropdown
}) => {
  const [txInProgress, setTxInProgress] = useState(false);

  const theme = useTheme();

  return (
    <DropdownOuterContainer>
      {(channelSetting && channelSetting.length != 0) &&
        <DropdownInnerContainer>

          <UpdateNotifSettingDropdown
            centerOnMobile={centerOnMobile}
            channelDetail={channelDetail}
            userSetting={userSetting}
            channelSetting={channelSetting}
            onSuccessSave={closeDropdown}
          >
            <DropdownBtn flexDirection="row">
              <ImageV2
                width="20px"
                height="20px"
                src="svg/manageSettings.svg"
                alt="Settings Logo"
              />
              <SpanV2 color={theme.viewChannelPrimaryText} fontWeight={500} fontSize="14px">Manage Settings</SpanV2>
            </DropdownBtn>
          </UpdateNotifSettingDropdown>

        </DropdownInnerContainer>
      }
      <DropdownBtn flexDirection="row" onClick={() => optOutHandler({ setLoading: setTxInProgress })}>
        <ImageV2
          width="20px"
          height="20px"
          src="svg/optout.svg"
          alt="Opt-out Logo"
        />
        <SpanV2 color={theme.viewChannelPrimaryText} fontWeight={500} fontSize="14px">
          {txInProgress &&
            <LoaderSpinner
              type={LOADER_TYPE.SEAMLESS}
              spinnerSize={16}
              spinnerColor="#FFF"
            />
          }
          {!txInProgress && <ActionTitle hideIt={txInProgress}>Opt-out</ActionTitle>}
        </SpanV2>
      </DropdownBtn>
    </DropdownOuterContainer>
  );
};

const ManageNotifSettingDropdown: React.FC<ManageNotifSettingDropdownProps> = (options) => {
  const {
    children,
    centerOnMobile,
    userSetting,
    channelDetail,
    onSuccessOptout
  } = options;
  const [isOpen, setIsOpen] = useState(false);
  const { chainId, provider, account,wallet } = useAccount();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const dispatch = useDispatch();
  const { handleConnectWallet,connectWallet } = useContext(AppContext);

  const channelSetting = useMemo(() => {
    if (channelDetail && channelDetail?.channel_settings) {
      return JSON.parse(channelDetail?.channel_settings);
    }
    return null;
  }, [channelDetail]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const onCoreNetwork = chainId === appConfig.coreContractChain;

  const unsubscribeToast = useToast();
  const optOutHandler = async ({ setLoading }: { setLoading?: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const setLoadingFunc = setLoading || (() => { });
    setLoadingFunc(true);
    let userPushInstance = userPushSDKInstance;

    //TODO: We can change this back to use Push User
    // if (!userPushInstance.signer) {
    //   userPushInstance = await handleConnectWallet();
    //   if (!userPushInstance) {
    //     setLoadingFunc(false);
    //     return;
    //   }
    // }

    try {
      let channelAddress = channelDetail.channel;
      if (!onCoreNetwork) {
        channelAddress = channelDetail.alias_address;
      }

      unsubscribeToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

      const _signer = await provider.getSigner(account);
      await PushAPI.channels.unsubscribe({
        signer: _signer,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId), // channel address in CAIP
        userAddress: convertAddressToAddrCaip(account, chainId), // user address in CAIP
        onSuccess: () => {
          dispatch(updateSubscriptionStatus({ channelAddress: channelAddress, status: false }));
          dispatch(removeUserSetting(channelAddress));

          unsubscribeToast.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Successfully opted out of channel !',
            toastType: 'SUCCESS',
            getToastIcon: (size) => (
              <MdCheckCircle
                size={size}
                color="green"
              />
            ),
          });

          closeDropdown();
        },
        onError: () => {
          console.error('opt out error');
          unsubscribeToast.showMessageToast({
            toastTitle: 'Error',
            toastMessage: `There was an error opting out of channel`,
            toastType: 'ERROR',
            getToastIcon: (size) => (
              <MdError
                size={size}
                color="red"
              />
            ),
          });
        },
        env: appConfig.pushNodesEnv,
      });


      // await userPushInstance.notification.unsubscribe(convertAddressToAddrCaip(channelAddress, chainId), {
      //   onSuccess: () => {
      //     onSuccessOptout();
      //     dispatch(updateSubscriptionStatus({ channelAddress: channelAddress, status: false }));
      //     dispatch(removeUserSetting(channelAddress));

      //     unsubscribeToast.showMessageToast({
      //       toastTitle: 'Success',
      //       toastMessage: 'Successfully opted out of channel !',
      //       toastType: 'SUCCESS',
      //       getToastIcon: (size) => (
      //         <MdCheckCircle
      //           size={size}
      //           color="green"
      //         />
      //       ),
      //     });

      //     closeDropdown();
      //   },
      //   onError: () => {
      //     console.error('opt in error');
      //     unsubscribeToast.showMessageToast({
      //       toastTitle: 'Error',
      //       toastMessage: `There was an error opting out of channel`,
      //       toastType: 'ERROR',
      //       getToastIcon: (size) => (
      //         <MdError
      //           size={size}
      //           color="red"
      //         />
      //       ),
      //     });
      //   },
      // });
    } catch (err) {
      unsubscribeToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: `There was an error opting into channel ( ${err.message} )`,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });

      console.error(err);
    } finally {
      setLoadingFunc(false);
    }
  };

  // render
  return (
    <DropdownBtnHandler
      showDropdown={isOpen}
      toggleDropdown={toggleDropdown}
      closeDropdown={closeDropdown}
      renderDropdownContainer={
        <ManageNotifSettingDropdownContainer
          centerOnMobile={centerOnMobile}
          userSetting={userSetting}
          channelSetting={channelSetting}
          channelDetail={channelDetail}
          optOutHandler={optOutHandler}
          closeDropdown={closeDropdown}
        />}
      containerPadding="12px 16px"
      centerOnMobile={centerOnMobile}
    >
      {children}
    </DropdownBtnHandler>
  );
}

// Export Default
export default ManageNotifSettingDropdown;

const DropdownOuterContainer = styled.div`
    min-width: max-content;
    gap: 16px;
    display: flex;
    flex-direction: column;
`;

const DropdownInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const DropdownBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: transparent;
    cursor: pointer;
    gap: 8px;
`;

const ActionTitle = styled.span<{ hideIt: boolean }>`
  ${(props) =>
    props.hideIt &&
    css`
      visibility: hidden;
    `};
`;