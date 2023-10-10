// React + Web3 Essentials
import React, { useEffect, useMemo } from 'react';
import { ethers } from 'ethers';

// External Packages
import 'react-dropdown/style.css';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from 'react-router-dom';
import { PiPencilSimpleBold } from 'react-icons/pi';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { MdCheckCircle, MdError } from 'react-icons/md';

// Internal Compoonents
import useToast from '../../hooks/useToast';
import AddSettingModalContent from './AddSettingModalContent';
import ChannelInfoHeader from './ChannelInfoHeader';
import { AddSettingButton } from './ChannelButtons';
import ChannelInfoList from './ChannelInfoList';
import DepositFeeFooter from './DepositFeeFooter';
import { useAccount } from 'hooks';

// Internal Configs
import { appConfig } from 'config';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import { ChannelSetting } from 'helpers/channel/types';
import { getChannel } from 'services';

// Constants
const CORE_CHAIN_ID = appConfig.coreContractChain;

function NotificationSettings() {
  const { account, chainId } = useAccount();
  const { coreChannelAdmin, delegatees } = useSelector((state: any) => state.admin);
  const { epnsWriteProvider } = useSelector((state: any) => state.contracts);

  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  const EDIT_SETTING_FEE = 50;

  const [channelAddress, setChannelAddress] = React.useState('');
  const [settings, setSettings] = React.useState<ChannelSetting[]>([]);
  const [settingToEdit, setSettingToEdit] = React.useState<ChannelSetting>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentSettings, setCurrentSettings] = React.useState<ChannelSetting[]>([]);
  const [isLoadingSettings, setIsLoadingSettings] = React.useState(true);

  const {
    isModalOpen: isAddSettingModalOpen,
    showModal: showAddSettingModal,
    ModalComponent: AddSettingModal,
  } = useModalBlur();

  const redirectBack = () => {
    const url = window.location.origin;
    window.location.replace(`${url}/channels`);
  };

  useEffect(() => {
    // Is not the channel admin so cannot edit settings
    (async () => {
      setIsLoading(true);
      if (!account) return;
      try {
        const channelDetails = await getChannel({ channel: account });
        if (!channelDetails) redirectBack();
      } catch {
        redirectBack();
      }
      if (coreChannelAdmin && coreChannelAdmin !== account) redirectBack();
      setIsLoading(false);
    })();
  }, [account, coreChannelAdmin]);

  useEffect(() => {
    if (isAddSettingModalOpen === false) setSettingToEdit(undefined);
  }, [isAddSettingModalOpen]);

  React.useEffect(() => {
    if (!account) return;
    if (!delegatees || !delegatees.length) {
      setChannelAddress(account);
    } else {
      // default the channel address to the first one on the list which should be that of the user if they have a channel
      if (onCoreNetwork) setChannelAddress(delegatees[0].channel);
      else setChannelAddress(delegatees[0].alias_address);
    }
  }, [delegatees, account]);

  useEffect(() => {
    if (delegatees) {
      const delegatee = delegatees.find(({ channel }) => channel === channelAddress);
      if (delegatee) {
        const { channel_settings } = delegatee;
        if (channel_settings !== null) {
          const parsedData = JSON.parse(channel_settings);
          const settings: ChannelSetting[] = parsedData.map((setting: any) => {
            if(setting.type === 1) {
              return {
                type: 1,
                isDefaultEnabled: setting.default,
                description: setting.description,
                index: setting.index,
              }
            } else {
              return {
                type: 2,
                isDefaultEnabled: setting.enabled === 1 ? true : false,
                defaultValue: setting.default,
                description: setting.description,
                index: setting.index,
                lowerLimit: setting.lowerLimit,
                upperLimit: setting.upperLimit,
              }
            }
          });
          setSettings(settings);
          setCurrentSettings(settings);
          setIsLoadingSettings(false);
        }
      }
    }
    return null;
  }, [delegatees, channelAddress]);

  // Notification Toast
  const notificationToast = useToast(5000);

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/dashboard', { replace: true });
  };

  const addSetting = (newSetting: ChannelSetting) => {
    const index = settings.findIndex((setting) => setting.index === newSetting.index);
    if (index === -1) setSettings([...settings, newSetting]);
    else {
      const updatedSetting = [...settings];
      updatedSetting[index] = newSetting;
      setSettings(updatedSetting);
    }
  };

  const editSetting = (settingToEdit: ChannelSetting) => {
    setSettingToEdit(settingToEdit);
    showAddSettingModal();
  };

  const deleteSetting = (settingToDelete: ChannelSetting) => {
    setSettings((settings) => settings.filter((setting) => setting.index !== settingToDelete.index));
  };

  const saveSettings = async () => {
    try {
      setIsLoading(true);

      const feesRequiredForEdit = 50;
      const parsedFees = ethers.utils.parseUnits(feesRequiredForEdit.toString(), 18);

      notificationToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });
      const notifOptions = settings.length;
      let _notifSettings = '';
      let _notifDescription = '';
      settings.forEach((setting) => {
        if (_notifSettings !== '') _notifSettings += '+';
        if (_notifDescription !== '') _notifDescription += '+';
        const isEnabled = setting.isDefaultEnabled ? '1' : '0';
        if (setting.type === 1) {
          _notifSettings += `${setting.type}-${isEnabled}`;
        } else if (setting.type === 2) {
          _notifSettings += `${setting.type}-${isEnabled}-${setting.defaultValue}-${setting.lowerLimit}-${setting.upperLimit}`;
        }
        _notifDescription += setting.description;
      });

      const tx = await epnsWriteProvider.createChannelSettings(
        notifOptions,
        _notifSettings,
        _notifDescription,
        parsedFees,
        { gasLimit: 1000000 }
      );

      console.log(tx);
      await tx.wait();
      setCurrentSettings(settings);
      setIsLoading(false);

      notificationToast.showMessageToast({
        toastTitle: 'Success',
        toastMessage: `Channel Settings Updated Successfully`,
        toastType: 'SUCCESS',
        getToastIcon: (size) => (
          <MdCheckCircle
            size={size}
            color="green"
          />
        ),
      });
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
      if (err.code == 'ACTION_REJECTED') {
        // EIP-1193 userRejectedRequest error
        notificationToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `User denied message signature.`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      } else {
        notificationToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error in updating channel settings`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
        console.log('Error --> %o', err);
        console.log({ err });
      }
    }
  };

  const settingsChanged = useMemo(() => {
    if (!settings || !currentSettings) return false;
    if (settings.length !== currentSettings.length) return true;
    let isUnchanged = true;
    for (let i = 0; i < settings.length; i++) {
      const setting1 = settings[i];
      const setting2 = currentSettings[i];
      if (setting1.type === 1) {
        isUnchanged =
          isUnchanged &&
          setting1.type === setting2.type &&
          setting1.description === setting2.description &&
          setting1.isDefaultEnabled === setting2.isDefaultEnabled;
      } else if (setting1.type === 2) {
        isUnchanged =
          isUnchanged &&
          setting1.type === setting2.type &&
          setting1.description === setting2.description &&
          setting1.defaultValue === setting2.defaultValue &&
          setting1.isDefaultEnabled === setting2.isDefaultEnabled &&
          setting1.lowerLimit === setting2.lowerLimit &&
          setting1.upperLimit === setting2.upperLimit;
      }
    }
    return isUnchanged === false;
  }, [settings, currentSettings]);

  return (
    <>
      <ChannelInfoHeader
        style={{ padding: 0 }}
        title="Notification Settings"
        description="Add, Edit or Remove Notification Settings"
        Button={<AddSettingButton onClick={showAddSettingModal} />}
      />
      <ChannelInfoList
        style={{ width: '100%', marginTop: '24px', marginBottom: '8px' }}
        account={account}
        isAddress={false}
        isLoading={isLoadingSettings}
        items={settings}
        onClickEmptyListButton={showAddSettingModal}
        emptyListButtonTitle="Add Setting"
        settingsDropdownOptions={[
          {
            icon: <PiPencilSimpleBold />,
            onClick: editSetting,
            text: 'Edit',
          },
          {
            icon: <IoMdRemoveCircleOutline />,
            onClick: deleteSetting,
            text: 'Delete',
          },
        ]}
      />
      <DepositFeeFooter
        feeRequired={EDIT_SETTING_FEE}
        title="Modify Settings fee"
        description="Make sure all settings are ready before proceeding to the next step"
        onCancel={goBack}
        disabled={!settingsChanged || isLoading}
        onClick={saveSettings}
      />
      <AddSettingModal
        modalPosition={MODAL_POSITION.ON_PARENT}
        InnerComponent={AddSettingModalContent}
        onConfirm={addSetting}
        InnerComponentProps={{ settingToEdit }}
      />
    </>
  );
}

// Export Default
export default NotificationSettings;
