import { FC } from 'react';

import { Box, Separator } from 'blocks';

import { ModalResponse } from 'common';

import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';

import { NotificationSettingsListItem } from './NotificationSettingsListItem';

type NotificationSettingsListsProps = {
  newSettings: ChannelSetting[];
  loadingSettings: boolean;
  modalControl: ModalResponse;
  setSettingsToEdit: (settingsToEdit: ChannelSetting) => void;
  handleDeleteSetting: (settingToDelete: ChannelSetting) => void;
  handleSettingsChange: (setting: ChannelSetting) => void;
};

const NotificationSettingsLists: FC<NotificationSettingsListsProps> = ({
  newSettings,
  loadingSettings,
  modalControl,
  setSettingsToEdit,
  handleDeleteSetting,
  handleSettingsChange,
}) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
    >
      {newSettings.map((setting: ChannelSetting, index: number) => {
        return (
          <Box key={index}>
            <NotificationSettingsListItem
              loadingSettings={loadingSettings}
              setting={setting}
              modalControl={modalControl}
              setSettingsToEdit={setSettingsToEdit}
              handleDeleteSetting={handleDeleteSetting}
              handleSettingsChange={handleSettingsChange}
            />
            <Separator />
          </Box>
        );
      })}
    </Box>
  );
};

export { NotificationSettingsLists };
