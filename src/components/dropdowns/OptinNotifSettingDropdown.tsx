// React + Web3 Essentials
import React, { useContext, useMemo, useState } from "react";

// External Packages
import Switch from 'react-switch';
import Slider from 'react-input-slider';
import styled, { css, useTheme } from "styled-components";
import { useDispatch } from "react-redux";

// Internal Components
import { DropdownBtnHandler } from "./DropdownBtnHandler";

// Internal Configs
import { SpanV2 } from "components/reusables/SharedStylingV2";
import { useAccount } from "hooks";
import { appConfig } from "config";
import { convertAddressToAddrCaip } from "helpers/CaipHelper";
import useToast from "hooks/useToast";
import { MdCheckCircle, MdError } from "react-icons/md";
import { ChannelSetting } from "helpers/channel/types";
import { notifChannelSettingFormatString, userSettingsFromDefaultChannelSetting } from "helpers/channel/notifSetting";
import { AppContext } from "contexts/AppContext";
import LoaderSpinner, { LOADER_TYPE } from "components/reusables/loaders/LoaderSpinner";
import { updateSubscriptionStatus, updateUserSetting } from "redux/slices/channelSlice";

interface OptinNotifSettingDropdownProps {
  children: React.ReactNode;
  channelDetail: any;
  setLoading: (loading: boolean) => {};
  onSuccessOptin: () => {};
}

interface OptinNotifSettingDropdownContainerProps {
  settings: ChannelSetting[]; 
  optInHandler: (options: { channelSettings?: ChannelSetting[], setLoading?: React.Dispatch<React.SetStateAction<boolean>> }) => Promise<void>;
}

const OptinNotifSettingDropdownContainer: React.FC<OptinNotifSettingDropdownContainerProps> = ({ settings, optInHandler }) => {
  const [modifiedSettings, setModifiedSettings] = useState([...settings]);
  const [txInProgress, setTxInProgress] = useState(false);

  const theme = useTheme();

  const handleSliderChange = (index: number, value: number) => {
    const updatedSettings = [...modifiedSettings];
    updatedSettings[index].default = value;
    setModifiedSettings(updatedSettings);
  };

  const handleSwitchChange = (index: number) => {
    const updatedSettings = [...modifiedSettings];
    if(updatedSettings[index].type === 1) {
      // Type 1
      // Use a type guard to narrow the type to ChannelSetting of type 1
      const setting = updatedSettings[index] as ChannelSetting & { type: 1 };
      setting.default = !setting.default;
    } else {
      // Type 2
      // Use a type guard to narrow the type to ChannelSetting of type 2
      const setting = updatedSettings[index] as ChannelSetting & { type: 2 };
      setting.enabled = !setting.enabled;
    }
    setModifiedSettings(updatedSettings);
  };

  return (
    <DropdownOuterContainer>
      {modifiedSettings.map((setting, index) => (
        <DropdownInnerContainer 
            key={index}
            hasBottomBorder={index !== settings.length - 1}
        >
            <DropdownSwitchItem>
                <SpanV2 color={theme.settingsModalPrimaryTextColor} fontSize="15px" fontWeight='500' textAlign="left">{setting.description}</SpanV2>
                <Switch 
                    onChange={() => handleSwitchChange(index)} checked={setting.type === 1 ? setting.default : setting.enabled} 
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor="#D53A94"
                    offColor="#A0A3B1"
                    height={16}
                    width={32}
                    handleDiameter={12}
                />
            </DropdownSwitchItem>
          {setting.type === 2 && setting.enabled === true && (
            <DropdownSliderItem>
                <Slider
                    styles={{
                        active: {
                            backgroundColor: theme.sliderActiveColor
                        },
                        track: {
                            height: 4,
                            width: 250,
                            backgroundColor: theme.sliderTrackColor
                        },
                        thumb: {
                            width: 16,
                            height: 16
                        }
                        }}
                    axis="x"
                    x={setting.default}
                    onChange={({ x }) => handleSliderChange(index, x)}
                    xstep={1}
                    xmin={setting.lowerLimit}
                    xmax={setting.upperLimit}
                />
                <SpanV2 color={theme.fontColor} fontSize="16px" fontWeight='500' textAlign="right">{setting.default}</SpanV2>
            </DropdownSliderItem>
          )}
        </DropdownInnerContainer>
      ))}
        <DropdownSubmitItem>
            <SpanV2 color={theme.textcolor} fontSize="15px" fontWeight='500' textAlign="left">You will receive all important updates from this channel.</SpanV2>
            <DropdownSubmitButton 
              onClick={() => optInHandler({ channelSettings: modifiedSettings, setLoading: setTxInProgress })}
            >
              {txInProgress &&
                <LoaderSpinner
                  type={LOADER_TYPE.SEAMLESS}
                  spinnerSize={16}
                  spinnerColor="#FFF"
                />
              }
              {!txInProgress && <ActionTitle hideIt={txInProgress}>Opt-in</ActionTitle>}
            </DropdownSubmitButton>
        </DropdownSubmitItem>
    </DropdownOuterContainer>
  );
};

// Faucet URLs
const OptinNotifSettingDropdown: React.FC<OptinNotifSettingDropdownProps> = (options) => {
  const { children, channelDetail, setLoading, onSuccessOptin } = options;

  const { chainId } = useAccount();
  const { userPushSDKInstance } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const onCoreNetwork = chainId === appConfig.coreContractChain;

  const channelSetting = useMemo(() => {
    if(channelDetail && channelDetail?.channel_settings) {
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

  const subscribeToast = useToast();
  const optInHandler = async ({ channelSettings, setLoading }: { channelSettings?: ChannelSetting[], setLoading?: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const setLoadingFunc = setLoading || (options && options.setLoading) || (() => {});
    setLoadingFunc(true);

    try {
      let channelAddress = channelDetail.channel;
      if (!onCoreNetwork) {
        channelAddress = channelDetail.alias_address;
      }

      subscribeToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

      await userPushSDKInstance.notification.subscribe(convertAddressToAddrCaip(channelAddress, chainId), {
        settings: notifChannelSettingFormatString({ settings: channelSettings }),
        // settings: [],
        onSuccess: () => {
          onSuccessOptin();
          dispatch(updateSubscriptionStatus({ channelAddress, status: true }));
          dispatch(updateUserSetting({ channelAddress, settings: userSettingsFromDefaultChannelSetting({ channelSetting: channelSettings })}));

          subscribeToast.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Successfully opted into channel !',
            toastType: 'SUCCESS',
            getToastIcon: (size) => (
              <MdCheckCircle
                size={size}
                color="green"
              />
            ),
          });
        },
        onError: () => {
          console.error('opt in error');
          subscribeToast.showMessageToast({
            toastTitle: 'Error',
            toastMessage: `There was an error opting into channel`,
            toastType: 'ERROR',
            getToastIcon: (size) => (
              <MdError
                size={size}
                color="red"
              />
            ),
          });
        },
      });
    } catch (err) {
      subscribeToast.showMessageToast({
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

      console.log(err);
    } finally {
      setLoadingFunc(false);
    }
  };

  // render
  return (
      (channelSetting && channelSetting.length) ? 
      <DropdownBtnHandler
        centerOnMobile={true}
        showDropdown={isOpen}
        toggleDropdown={toggleDropdown}
        closeDropdown={closeDropdown}
        renderDropdownContainer={<OptinNotifSettingDropdownContainer settings={channelSetting} optInHandler={optInHandler} />}
        containerPadding="0px 16px 16px 16px"
      >
        {children}
      </DropdownBtnHandler>
        :
        <SpanV2 onClick={optInHandler}>
          {children}
        </SpanV2>
      
  );
}

// Export Default
export default OptinNotifSettingDropdown;

const DropdownOuterContainer = styled.div`
    min-width: 300px;
`;

const DropdownInnerContainer = styled.div<{ hasBottomBorder: boolean }>`
    display: flex;
    flex-direction: column;
    min-width: 250px;

    ${(props) =>
        props.hasBottomBorder &&
        css`
            border-bottom: 1px solid ${(props) => props.theme.settingsModalBorderBottomColor};
        `}
`;

const DropdownSwitchItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 10px 0px;
`;

const DropdownSubmitItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 10px 0px;
`;

const DropdownSubmitButton = styled.button`
    border: 0;
    outline: 0;
    display: flex;
    align-items: center;
    min-width: 90px;
    justify-content: center;
    margin: 0px 0px 0px 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    background: #e20880;
    border-radius: 8px;
    padding: 9px 20px;
    &:hover {
        opacity: 0.9;
        cursor: pointer;
        pointer: hand;
    }
    &:active {
        opacity: 0.75;
        cursor: pointer;
        pointer: hand;
    }
    ${(props) =>
    props.disabled &&
    css`
        &:hover {
            opacity: 1;
            cursor: default;
            pointer: default;
        }
        &:active {
            opacity: 1;
            cursor: default;
            pointer: default;
        }
    `}
`

const DropdownSliderItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding-bottom: 10px;
`;

const ActionTitle = styled.span<{ hideIt: boolean }>`
  ${(props) =>
    props.hideIt &&
    css`
      visibility: hidden;
    `};
`;
