// React + Web3 Essentials
import React, { useContext, useState } from "react";

// External Packages
import Switch from 'react-switch';
import styled, { css, useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// Internal Components
import { DropdownBtnHandler } from "./DropdownBtnHandler";
import InputSlider from "components/reusables/sliders/InputSlider";
import RangeSlider from "components/reusables/sliders/RangeSlider";

// Internal Configs
import { SpanV2 } from "components/reusables/SharedStylingV2";
import useToast from "hooks/useToast";
import { useAccount } from "hooks";
import { AppContext } from "contexts/AppContext";
import { appConfig } from "config";
import { ChannelSetting, UserSetting } from "helpers/channel/types";
import { convertAddressToAddrCaip } from "helpers/CaipHelper";
import { notifUserSettingFormatString, userSettingsFromDefaultChannelSetting } from "helpers/channel/notifSetting";
import { MdCheckCircle, MdError } from "react-icons/md";
import LoaderSpinner, { LOADER_TYPE } from "components/reusables/loaders/LoaderSpinner";
import { updateUserSetting } from "redux/slices/channelSlice";

interface UpdateNotifSettingDropdownProps {
  children: React.ReactNode;
  centerOnMobile: boolean;
  channelDetail: any;
  channelSetting?: ChannelSetting[];
  userSetting?: UserSetting[];
  onSuccessSave?: () => void;
}

interface UpdateNotifSettingDropdownContainerProps {
  settings: UserSetting[]; 
  saveUserSettingHandler: (options: { userSettings?: UserSetting[], setLoading?: React.Dispatch<React.SetStateAction<boolean>> }) => Promise<void>;
}

const UpdateNotifSettingDropdownContainer: React.FC<UpdateNotifSettingDropdownContainerProps> = ({ settings, saveUserSettingHandler }) => {
  const [modifiedSettings, setModifiedSettings] = useState([...settings]);
  const [txInProgress, setTxInProgress] = useState(false);

  const theme = useTheme();

  const handleSliderChange = (index: number, value: number | {lower: number, upper: number}) => {
    const updatedSettings = [...modifiedSettings];
    updatedSettings[index].user = value;
    setModifiedSettings(updatedSettings);
  };

  const handleSwitchChange = (index: number) => {
    const updatedSettings = [...modifiedSettings];
    if(updatedSettings[index].type === 1) {
      // Type 1
      // Use a type guard to narrow the type to UserSetting of type 1
      const setting = updatedSettings[index] as UserSetting & { type: 1 };
      setting.user = !setting.user;
    } else if (updatedSettings[index].type === 2) {
      // Type 2
      // Use a type guard to narrow the type to UserSetting of type 2
      const setting = updatedSettings[index] as UserSetting & { type: 2 };
      setting.enabled = !setting.enabled;
    } else {
      // Type 3
      // Use a type guard to narrow the type to UserSetting of type 2
      const setting = updatedSettings[index] as UserSetting & { type: 3 };
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
                    onChange={() => handleSwitchChange(index)} checked={setting.type === 1 ? setting.user : setting.enabled}
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
              <SpanV2 color={theme.fontColor} fontSize="18px" fontWeight='600' alignSelf="flex-start">
                  {setting.user || setting.default}
              </SpanV2>
              <InputSlider
                  val={setting.user}
                  max={setting.upperLimit}
                  min={setting.lowerLimit}
                  step={setting.ticker || 1}
                  defaultVal={setting.default}
                  onChange={({ x }) => handleSliderChange(index, x)}
              />
            </DropdownSliderItem>
          )}
          {setting.type === 3 && setting.enabled === true && (
            <DropdownSliderItem>
              <SpanV2 color={theme.fontColor} fontSize="18px" fontWeight='600' alignSelf="flex-start">
                  {setting.user.lower || setting.default.lower} - {setting.user.upper || setting.default.upper}
              </SpanV2>
              <RangeSlider
                  startVal={setting.user.lower || setting.default.lower}
                  endVal={setting.user.upper || setting.default.upper}
                  max={setting.upperLimit}
                  min={setting.lowerLimit}
                  step={setting.ticker || 1}
                  defaultStartVal={setting.default.lower}
                  defaultEndVal={setting.default.upper}
                  onChange={({ startVal, endVal }) => handleSliderChange(index, {lower: startVal, upper: endVal})}
              />
            </DropdownSliderItem>
          )}
        </DropdownInnerContainer>
      ))}
        <DropdownSubmitItem>
            <SpanV2 color={theme.textcolor} fontSize="15px" fontWeight='500' textAlign="left">You will receive all important updates from this channel.</SpanV2>
            <DropdownSubmitButton 
              onClick={() => saveUserSettingHandler({ userSettings: modifiedSettings, setLoading: setTxInProgress })}
            >
              {txInProgress &&
                <LoaderSpinner
                  type={LOADER_TYPE.SEAMLESS}
                  spinnerSize={16}
                  spinnerColor="#FFF"
                />
              }
              {!txInProgress && <ActionTitle hideIt={txInProgress}>Save</ActionTitle>}
            </DropdownSubmitButton>
        </DropdownSubmitItem>
    </DropdownOuterContainer>
  );
};

// Faucet URLs
const UpdateNotifSettingDropdown: React.FC<UpdateNotifSettingDropdownProps> = ({ 
  children, 
  centerOnMobile,
  channelDetail,
  channelSetting,
  userSetting,
  onSuccessSave
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { chainId } = useAccount();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const dispatch = useDispatch();

  const onCoreNetwork = chainId === appConfig.coreContractChain;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const {handleConnectWallet} = useContext(AppContext);

  const subscribeToast = useToast();
  const saveUserSettingHandler = async ({ userSettings, setLoading }: { userSettings?: UserSetting[], setLoading?: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const setLoadingFunc = setLoading || (() => {});
    const saveOnSuccessSettingFunc = onSuccessSave || (() => {});
    setLoadingFunc(true);

    let userPushInstance = userPushSDKInstance;

    if (!userPushInstance.signer) {
      userPushInstance = await handleConnectWallet();
      if (!userPushInstance) {
        setLoadingFunc(false);
        return;
      }
    }

    try {
      let channelAddress = channelDetail.channel;
      if (!onCoreNetwork) {
        channelAddress = channelDetail.alias_address;
      }

      subscribeToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

      await userPushInstance.notification.subscribe(convertAddressToAddrCaip(channelAddress, chainId), {
        settings: notifUserSettingFormatString({ settings: userSettings }),
        // settings: [],
        onSuccess: () => {
          saveOnSuccessSettingFunc();
          closeDropdown();
          dispatch(updateUserSetting({ channelAddress, settings: userSetting }));

          subscribeToast.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Successfully saved the user settings!',
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
            toastMessage: `There was an error in saving the settings`,
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
        toastMessage: `There was an error in saving the settings ( ${err.message} )`,
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
        centerOnMobile={centerOnMobile}
        showDropdown={isOpen}
        toggleDropdown={toggleDropdown}
        closeDropdown={closeDropdown}
        renderDropdownContainer={
          <UpdateNotifSettingDropdownContainer 
            settings={userSetting ?? userSettingsFromDefaultChannelSetting({ channelSetting: channelSetting })} 
            saveUserSettingHandler={saveUserSettingHandler}
          />}
        containerPadding="0px 16px 16px 16px"
      >
        {children}
      </DropdownBtnHandler>
  );
}

// Export Default
export default UpdateNotifSettingDropdown;

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
    padding: 12px 0px;
`;

const DropdownSubmitItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 12px 0px;
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
    flex-direction: column;
    gap: 13px;
    align-items: center; 
    padding-bottom: 12px;
`;

const ActionTitle = styled.span<{ hideIt: boolean }>`
  ${(props) =>
    props.hideIt &&
    css`
      visibility: hidden;
    `};
`;
