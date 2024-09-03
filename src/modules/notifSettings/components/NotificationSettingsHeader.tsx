import { FC } from 'react';

import { Add, Box, Button, Text } from 'blocks';

import { ModalResponse } from 'common';

import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';
import { settingInitialValue } from '../NotificationSettings.constants';
import { useAccount } from 'hooks';

type NotificationSettingsHeaderProps = {
  modalControl: ModalResponse;
  setSettingsToEdit: (settingsToEdit: ChannelSetting) => void;
};
const NotificationSettingsHeader: FC<NotificationSettingsHeaderProps> = ({ modalControl, setSettingsToEdit }) => {
  const { open } = modalControl;
  const { isWalletConnected, connect } = useAccount();

  const openModal = () => (!isWalletConnected ? connect() : open());

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      width="100%"
    >
      <Box>
        <Text
          variant="h4-semibold"
          color="text-primary"
        >
          Notification Settings
        </Text>
        <Text
          variant="bs-regular"
          color="text-tertiary"
        >
          Add, Edit or Remove Notification Settings
        </Text>
      </Box>
      <Button
        size="extraSmall"
        variant="tertiary"
        leadingIcon={<Add />}
        onClick={() => {
          setSettingsToEdit(settingInitialValue);
          openModal();
        }}
      >
        Add Setting
      </Button>
    </Box>
  );
};

export { NotificationSettingsHeader };
