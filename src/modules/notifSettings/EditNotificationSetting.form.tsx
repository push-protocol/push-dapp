import { FC } from 'react';

import { FormikProvider, useFormik, useFormikContext } from 'formik';

import { ChannelSetting } from 'modules/channelDashboard/ChannelDashboard.types';

type EditNotificationSettingsFormProviderProps = {
  children: React.ReactNode;
  initialValue: ChannelSetting;
  onSubmit: (values: NotificationSettingFormValues) => void;
};

export const getFormInitialValus = (initialValue: ChannelSetting): NotificationSettingFormValues => {
  return {
    settingName: initialValue.description,
    isDefault:
      initialValue.type === 1 ? (typeof initialValue.default === 'boolean' ? true : false) : initialValue.enabled!,
    enableRange: initialValue.type !== 1 ? true : false,
    rangelowerlimit: initialValue.lowerLimit ? initialValue.lowerLimit : 0,
    rangeupperlimit: initialValue.upperLimit ? initialValue.upperLimit : 0,
    enableMultiRange: initialValue.type === 3 ? true : false,
    defaultValue: typeof initialValue.default === 'number' ? initialValue.default : 0,
    multirangelowerlimit: typeof initialValue.default === 'object' ? initialValue.default.lower : 0,
    multirangeupperlimit: typeof initialValue.default === 'object' ? initialValue.default.upper : 0,
    sliderStepValue: initialValue.ticker ? initialValue.ticker : 0,
  };
};

const EditNotificationSettingsFormProvider: FC<EditNotificationSettingsFormProviderProps> = ({
  children,
  initialValue,
  onSubmit,
}) => {
  const addNotificationSettingsForm = useFormik<NotificationSettingFormValues>({
    initialValues: getFormInitialValus(initialValue),
    onSubmit: onSubmit,
  });

  return <FormikProvider value={addNotificationSettingsForm}>{children}</FormikProvider>;
};

const useEditNotificationSettingsForm = () => {
  const context = useFormikContext<NotificationSettingFormValues>();

  if (!context) {
    throw new Error('useEditNotificationSettingsForm must be used within a EditNotificationSettingsFormProvider');
  }
  return context;
};

export { useEditNotificationSettingsForm, EditNotificationSettingsFormProvider };
