import { FC, useEffect, useState } from 'react';

import { ModalResponse } from 'common';

import { useAccount } from 'hooks';

import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';
import { ChannelDashboardNullState } from 'modules/channelDashboard/components/ChannelDashboardNullState';

import { NotificationSettingsHeader } from './NotificationSettingsHeader';
import { settingInitialValue } from '../NotificationSettings.constants';
import { NotificationSettingsLists } from './NotificationSettingsLists';
import { NotificationSettingsFooter } from './NotificationSettingsFooter';
import { NotificationSettingsModal } from './NotificationSettingsModal';

type NotificationSettingsComponentProps = {
  modalControl: ModalResponse;
  channelSettings: ChannelSetting[];
  loadingSettings: boolean;
};

const NotificationSettingsComponent: FC<NotificationSettingsComponentProps> = ({
  modalControl,
  channelSettings,
  loadingSettings,
}) => {
  const { open } = modalControl;
  const { isWalletConnected, connect } = useAccount();
  const [settingsToEdit, setSettingsToEdit] = useState<ChannelSetting>(settingInitialValue);

  const [newSettings, setNewSettings] = useState<ChannelSetting[]>([]);

  useEffect(() => {
    if (channelSettings && !loadingSettings) {
      setNewSettings(channelSettings);
    }
  }, [loadingSettings]);

  const handleDeleteSetting = (settingToDelete: ChannelSetting) => {
    setNewSettings((settings) => settings.filter((setting) => setting.index !== settingToDelete.index));
  };

  const handleSettingsChange = (newSetting: ChannelSetting) => {
    const index = newSettings.findIndex((setting) => setting.index === newSetting.index);
    if (index === -1) setNewSettings([...newSettings, newSetting]);
    else {
      const updatedSetting = newSettings.map((setting, settingIndex) =>
        settingIndex === index ? { ...newSetting } : setting
      );
      setNewSettings(updatedSetting);
    }
  };

  const openModal = () => (!isWalletConnected ? connect() : open());

  return (
    <>
      <NotificationSettingsHeader
        modalControl={modalControl}
        setSettingsToEdit={setSettingsToEdit}
      />

      {newSettings.length > 0 ? (
        <NotificationSettingsLists
          newSettings={newSettings}
          modalControl={modalControl}
          setSettingsToEdit={setSettingsToEdit}
          loadingSettings={loadingSettings}
          handleDeleteSetting={handleDeleteSetting}
          handleSettingsChange={handleSettingsChange}
        />
      ) : (
        <ChannelDashboardNullState
          state="notificationSettings"
          title="No settings yet"
          subTitle="Add options for users to customize notifications."
          onClick={openModal}
        />
      )}

      <NotificationSettingsModal
        modalControl={modalControl}
        settingsToEdit={settingsToEdit}
        setNewSettings={setNewSettings}
        handleSettingsChange={handleSettingsChange}
      />

      <NotificationSettingsFooter
        newSettings={newSettings}
        channelSettings={channelSettings}
      />
    </>
  );
};

export { NotificationSettingsComponent };
