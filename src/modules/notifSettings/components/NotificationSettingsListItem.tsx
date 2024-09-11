import { FC } from 'react';

import { Box, Dropdown, KebabMenuVertical, Lozenge, Menu, MenuItem, OptOut, Pencil, Skeleton, Text } from 'blocks';

import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';

import { ModalResponse } from 'common';

type NotificationSettingsListItemProps = {
  setting: ChannelSetting;
  loadingSettings: boolean;
  modalControl: ModalResponse;
  setSettingsToEdit: (settingsToEdit: ChannelSetting) => void;
  handleDeleteSetting: (settingToDelete: ChannelSetting) => void;
  handleSettingsChange: (setting: ChannelSetting) => void;
};

const NotificationSettingsListItem: FC<NotificationSettingsListItemProps> = ({
  setting,
  modalControl,
  loadingSettings,
  setSettingsToEdit,
  handleDeleteSetting,
}) => {
  const { open } = modalControl;

  return (
    <Box
      display="flex"
      width="100%"
      padding="spacing-sm spacing-none"
      justifyContent="space-between"
    >
      <Skeleton
        isLoading={loadingSettings}
        height="20px"
        width="100px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          gap="spacing-xxs"
        >
          <Text
            variant="bs-regular"
            color="text-primary"
          >
            {setting.description}
          </Text>
          {setting.type == 2 && <Lozenge>Range</Lozenge>}
          {setting.type == 3 && <Lozenge>Multi-Range</Lozenge>}
        </Box>
      </Skeleton>
      <Dropdown
        overlay={
          <Menu>
            <MenuItem
              label="Edit"
              icon={<Pencil size={24} />}
              onClick={() => {
                setSettingsToEdit(setting);
                open();
              }}
            />
            <MenuItem
              label="Remove"
              icon={<OptOut size={24} />}
              onClick={() => {
                handleDeleteSetting(setting);
              }}
            />
          </Menu>
        }
      >
        <Box cursor="pointer">
          <KebabMenuVertical />
        </Box>
      </Dropdown>
    </Box>
  );
};

export { NotificationSettingsListItem };
