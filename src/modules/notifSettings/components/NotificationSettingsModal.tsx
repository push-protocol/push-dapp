import { FC } from 'react';

import { ModalResponse } from 'common';

import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';

import { EditNotificationSettingsFormProvider } from '../EditNotificationSetting.form';
import { NotificationSettingsModalWrapper } from './NotificationSettingsModalWrapper';

type NotificationSettingsModalProps = {
  modalControl: ModalResponse;
  settingsToEdit: ChannelSetting;
  setNewSettings: (setting: ChannelSetting[]) => void;
  handleSettingsChange: (setting: ChannelSetting) => void;
};
const NotificationSettingsModal: FC<NotificationSettingsModalProps> = ({
  modalControl,
  settingsToEdit,
  handleSettingsChange,
}) => {
  const { isOpen, onClose } = modalControl;

  return (
    <EditNotificationSettingsFormProvider
      initialValue={settingsToEdit}
      onSubmit={(values) => {
        // handleAddSettings(values);
      }}
    >
      <NotificationSettingsModalWrapper
        isOpen={isOpen}
        onClose={onClose}
        settingsToEdit={settingsToEdit}
        handleSettingsChange={handleSettingsChange}
      />
    </EditNotificationSettingsFormProvider>
  );
};

export { NotificationSettingsModal };
