// React + Web3 Essentials
import React, { useContext, useEffect, useMemo } from 'react';

// External Packages
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from 'react-redux';
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
import { AppContext } from 'contexts/AppContext';

// Internal Configs
import { appConfig } from 'config';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import { ChannelSetting } from 'helpers/channel/types';
import { getChannel } from 'services';
import { updateChannelSetting } from 'redux/slices/channelSlice';
import { NotificationSetting } from '@pushprotocol/restapi/src/lib/pushNotification/PushNotificationTypes';

// Constants
const CORE_CHAIN_ID = appConfig.coreContractChain;

function NotificationSettings() {
  const { account, chainId } = useAccount();
  const { coreChannelAdmin, delegatees } = useSelector((state: any) => state.admin);
  const { epnsWriteProvider } = useSelector((state: any) => state.contracts);
  const { channelSettings } = useSelector((state: any) => state.channels);

  const dispatch = useDispatch();

  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  const EDIT_SETTING_FEE = 50;

  const [channelAddress, setChannelAddress] = React.useState('');
  const [settings, setSettings] = React.useState<ChannelSetting[]>([]);
  const [settingToEdit, setSettingToEdit] = React.useState<ChannelSetting>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingSettings, setIsLoadingSettings] = React.useState(true);
  const { handleConnectWallet } = useContext(AppContext);

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

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
        const channelDetails = await userPushSDKInstance.channel.info(account);
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

  useEffect(() => {
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
    if (channelAddress && channelSettings[channelAddress]) {
      setSettings(channelSettings[channelAddress] || []);
      setIsLoadingSettings(false);
    }
  }, [channelAddress, channelSettings]);

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

      let userPushInstance = userPushSDKInstance;
      if (!userPushInstance.signer) {
        userPushInstance = await handleConnectWallet();
        if (!userPushInstance) {
          setIsLoading(false);
          return;
        }
      }


      notificationToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });
      const settingData: NotificationSetting[] = settings.map((setting) => {
        if (setting.type === 1) {
          return {
            type: setting.type,
            description: setting.description,
            default: setting.default ? 1 : 0,
          };
        }
        else if (setting.type === 2) {
          console.info(
            {
              type: setting.type,
              description: setting.description,
              default: setting.default,
              data: {
                lower: setting.lowerLimit,
                upper: setting.upperLimit,
                ticker: setting.ticker,
                enabled: setting.enabled,
              },
            }
          )
          return {
            type: setting.type,
            description: setting.description,
            default: setting.default,
            data: {
              lower: setting.lowerLimit,
              upper: setting.upperLimit,
              ticker: setting.ticker,
              enabled: setting.enabled,
            },
          };
        } else if (setting.type === 3) {
          console.info(
            {
              type: setting.type,
              description: setting.description,
              default: setting.default,
              data: {
                lower: setting.lowerLimit,
                upper: setting.upperLimit,
                ticker: setting.ticker,
                enabled: setting.enabled,
              },
            }
          )
          return {
            type: setting.type,
            description: setting.description,
            default: setting.default,
            data: {
              lower: setting.lowerLimit,
              upper: setting.upperLimit,
              ticker: setting.ticker,
              enabled: setting.enabled,
            },
          };
        }
      });
      console.info(settingData);
      await userPushInstance.channel.setting(settingData);

      dispatch(updateChannelSetting({ channelAddress, settings }));
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

      // Go back to channel dashboard
      setTimeout(() => goBack(), 2000);
    } catch (err) {
      setIsLoading(false);
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
        console.error('Error --> %o', err);
      }
    }
  };

  const settingsChanged = useMemo(() => {
    if (!settings || !channelSettings[account]) return false;
    if (settings.length !== channelSettings[account].length) return true;
    let isUnchanged = true;
    for (let i = 0; i < settings.length; i++) {
      const setting1 = settings[i];
      const setting2 = channelSettings[account][i];
      if (setting1.type === 1) {
        isUnchanged =
          isUnchanged &&
          setting1.type === setting2.type &&
          setting1.description === setting2.description &&
          setting1.default === setting2.default;
      } else if (setting1.type === 2) {
        isUnchanged =
          isUnchanged &&
          setting1.type === setting2.type &&
          setting1.description === setting2.description &&
          setting1.default === setting2.default &&
          setting1.enabled === setting2.enabled &&
          setting1.lowerLimit === setting2.lowerLimit &&
          setting1.upperLimit === setting2.upperLimit &&
          setting1.ticker === setting2.ticker;
      }
    }
    return isUnchanged === false;
  }, [settings, channelSettings[account]]);

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
