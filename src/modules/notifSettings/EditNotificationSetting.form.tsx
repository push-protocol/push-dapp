import { FC } from 'react';

import * as Yup from 'yup';

import { FormikProvider, useFormik, useFormikContext } from 'formik';

import { getMinNumValueMessage, getRangeValueMessage, getRequiredFieldMessage } from 'common';

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
      initialValue.type === 1
        ? typeof initialValue.default === 'boolean'
          ? initialValue.default
          : true
        : initialValue.enabled!,
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

export const NotificationSettingsSchema = Yup.object().shape({
  settingName: Yup.string().required(getRequiredFieldMessage('Setting Name')),
  isDefault: Yup.boolean(),
  enableRange: Yup.boolean(),

  rangelowerlimit: Yup.number().when('enableRange', {
    is: true,
    then: () => Yup.number().min(1, getMinNumValueMessage(1)).required(getRequiredFieldMessage('Range')),
    otherwise: () => Yup.number(),
  }),

  rangeupperlimit: Yup.number().when('enableRange', {
    is: true,
    then: () =>
      Yup.number()
        .min(Yup.ref('rangelowerlimit'), getMinNumValueMessage('Lower limit'))
        .required(getRequiredFieldMessage('Range')),
    otherwise: () => Yup.number(),
  }),

  enableMultiRange: Yup.boolean().required(getRequiredFieldMessage('')),

  multirangelowerlimit: Yup.number().when(['enableMultiRange', 'enableRange'], {
    is: (enableMultiRange: boolean, enableRange: boolean) => enableMultiRange && enableRange,
    then: () =>
      Yup.number()
        .min(1, getMinNumValueMessage(1))
        .required(getRequiredFieldMessage('Range'))
        .test('is-multi-range-within-range', getRangeValueMessage('Multi-range lower limit'), (value, context) => {
          const { rangelowerlimit, rangeupperlimit } = context.parent;
          return value >= rangelowerlimit && value < rangeupperlimit;
        }),
    otherwise: () => Yup.number(),
  }),

  multirangeupperlimit: Yup.number().when(['enableMultiRange', 'enableRange'], {
    is: (enableMultiRange: boolean, enableRange: boolean) => enableMultiRange && enableRange,
    then: () =>
      Yup.number()
        .min(Yup.ref('multirangelowerlimit'), getMinNumValueMessage('Lower limit'))
        .required(getRequiredFieldMessage('Range'))
        .test(
          'is-multi-range-upper-within-range',
          getRangeValueMessage('Multi-range upper limit'),
          (value, context) => {
            const { rangelowerlimit, rangeupperlimit } = context.parent;
            return value > rangelowerlimit && value <= rangeupperlimit;
          }
        ),
    otherwise: () => Yup.number(),
  }),

  defaultValue: Yup.number().when(['enableMultiRange', 'enableRange'], {
    is: (enableMultiRange: boolean, enableRange: boolean) => !enableMultiRange && enableRange,
    then: () =>
      Yup.number()
        .min(0, getMinNumValueMessage(0))
        .required(getRequiredFieldMessage('Default Value'))
        .test('is-within-range', getRangeValueMessage('Default value'), (value, context) => {
          const { rangelowerlimit, rangeupperlimit } = context.parent;
          return value >= rangelowerlimit && value <= rangeupperlimit;
        }),
    otherwise: () => Yup.number(),
  }),

  sliderStepValue: Yup.number().when('enableRange', {
    is: true,
    then: () =>
      Yup.number()
        .min(1, getMinNumValueMessage(1))
        .required(getRequiredFieldMessage('Slider Step'))
        .test('is-step-value-valid', 'Slider step value must not exceed the range limits.', (value, context) => {
          const { rangeupperlimit } = context.parent;
          return value < rangeupperlimit;
        }),
    otherwise: () => Yup.number(),
  }),
});

const EditNotificationSettingsFormProvider: FC<EditNotificationSettingsFormProviderProps> = ({
  children,
  initialValue,
  onSubmit,
}) => {
  const initialValues = getFormInitialValus(initialValue);

  const addNotificationSettingsForm = useFormik<NotificationSettingFormValues>({
    initialValues,
    enableReinitialize: true,
    validationSchema: NotificationSettingsSchema,
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
