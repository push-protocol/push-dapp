import { FC, useEffect, useState } from 'react';

import { Box } from 'blocks';

import { ModalResponse } from 'common';

import { ChannelDashboardNullState } from 'modules/channelDashboard/components/ChannelDashboardNullState';
import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';

import { NotificationSettingsLists } from './NotificationSettingsLists';
import { NotificationSettingsFooter } from './NotificationSettingsFooter';
import { NotificationSettingsModal } from './NotificationSettingsModal';

type NotificationSettingsBodyProps = {
  modalControl: ModalResponse;
  channelSettings: ChannelSetting[];
  loadingSettings: boolean;
  settingsToEdit: ChannelSetting;
  setSettingsToEdit: (settingsToEdit: ChannelSetting) => void;
};

const NotificationSettingsBody: FC<NotificationSettingsBodyProps> = ({
  modalControl,
  channelSettings,
  loadingSettings,
  settingsToEdit,
  setSettingsToEdit,
}) => {
  const [newSettings, setNewSettings] = useState<ChannelSetting[]>([]);

  const { open } = modalControl;

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
      const updatedSetting = [...newSettings];
      updatedSetting[index] = newSetting;
      setNewSettings(updatedSetting);
    }
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      gap="spacing-md"
    >
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
          onClick={open}
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
    </Box>
  );
};

export { NotificationSettingsBody };
