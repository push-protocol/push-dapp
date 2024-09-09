import { FC } from 'react';

import { Modal } from 'blocks';

import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';

import { AddNotificationSettingsModalContent } from './AddNotificationSettingsModalContent';
import { useEditNotificationSettingsForm } from '../EditNotificationSetting.form';

type NotificationSettingsModalWrapperProps = {
  isOpen: boolean;
  onClose: () => void;
  settingsToEdit: ChannelSetting;
  handleSettingsChange: (setting: ChannelSetting) => void;
};

const NotificationSettingsModalWrapper: FC<NotificationSettingsModalWrapperProps> = ({
  isOpen,
  onClose,
  settingsToEdit,
  handleSettingsChange,
}) => {
  const { values: formValues, validateForm, setTouched, dirty, resetForm } = useEditNotificationSettingsForm();

  const handleAddSettings = async (values: NotificationSettingFormValues) => {
    setTouched({
      settingName: true,
      defaultValue: true,
      rangelowerlimit: true,
      rangeupperlimit: true,
      multirangelowerlimit: true,
      multirangeupperlimit: true,
      sliderStepValue: true,
      enableRange: true,
      enableMultiRange: true,
      isDefault: true,
    });

    if (dirty) {
      const validationErrors = await validateForm();

      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }

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
    resetForm();

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={{
        children: 'Save Settings',
        onClick: () => {
          handleAddSettings(formValues);
        },
      }}
      cancelButtonProps={{
        children: 'Cancel',
      }}
    >
      <AddNotificationSettingsModalContent onClose={onClose} />
    </Modal>
  );
};

export { NotificationSettingsModalWrapper };
