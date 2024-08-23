import { FC } from 'react';

import { Modal } from 'blocks';

import { ModalResponse } from 'common';

import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';

import { AddNotificationSettingsModalContent } from './AddNotificationSettingsModalContent';
import { EditNotificationSettingsFormProvider } from '../EditNotificationSetting.form';

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

  const handleAddSettings = (values: NotificationSettingFormValues) => {
    const index = settingsToEdit.index !== 0 ? settingsToEdit.index : Math.floor(Math.random() * 1000000);

    const newAddedSettings: ChannelSetting = values.enableRange
      ? values.enableMultiRange
        ? {
            type: 3,
            default: {
              lower: Number(values.multirangelowerlimit),
              upper: Number(values.multirangeupperlimit),
            },
            enabled: values.isDefault,
            description: values.settingName,
            lowerLimit: Number(values.rangelowerlimit),
            upperLimit: Number(values.rangeupperlimit),
            ticker: Number(values.sliderStepValue),
            index: index,
          }
        : {
            type: 2,
            default: Number(values.defaultValue),
            enabled: values.isDefault,
            description: values.settingName,
            lowerLimit: Number(values.rangelowerlimit),
            upperLimit: Number(values.rangeupperlimit),
            ticker: Number(values.sliderStepValue),
            index: index,
          }
      : {
          type: 1,
          default: values.isDefault,
          description: values.settingName,
          index: index,
        };

    handleSettingsChange(newAddedSettings);

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={null}
      cancelButtonProps={null}
    >
      <EditNotificationSettingsFormProvider
        initialValue={settingsToEdit}
        onSubmit={(values) => {
          handleAddSettings(values);
        }}
      >
        <AddNotificationSettingsModalContent modalControl={modalControl} />
      </EditNotificationSettingsFormProvider>
    </Modal>
  );
};

export { NotificationSettingsModal };
