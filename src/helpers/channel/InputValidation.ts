import { ChannelSetting } from './types';

const isEmpty = (field: string) => {
  return field.trim().length == 0;
};

export const isAllFilledAndValid = ({
  setErrorInfo,
  lowerLimit,
  upperLimit,
  type,
  settingName,
  defaultValue,
}: {
  setErrorInfo: React.Dispatch<
    React.SetStateAction<{
      settingName: string;
      lowerLimit: string;
      upperLimit: string;
      default: string;
    }>
  >;
  upperLimit: string;
  lowerLimit: string;
  type: ChannelSetting['type'];
  settingName: string;
  defaultValue: string;
}): boolean => {
  setErrorInfo(undefined);

  let hasError = false;

  if (isEmpty(settingName)) {
    setErrorInfo((x) => ({
      ...x,
      settingName: 'Setting Name is required',
    }));
    hasError = true;
  }

  if (type === 2) {
    if (isEmpty(lowerLimit)) {
      setErrorInfo((x) => ({
        ...x,
        lowerLimit: 'Minimum range is required',
      }));
      hasError = true;
    }
    if (isEmpty(upperLimit)) {
      setErrorInfo((x) => ({
        ...x,
        upperLimit: 'Maximum range is required',
      }));
      hasError = true;
    }
    if (isEmpty(defaultValue)) {
      setErrorInfo((x) => ({
        ...x,
        default: 'Default value is required',
      }));
      hasError = true;
    }
    if (!isEmpty(lowerLimit) && !isEmpty(upperLimit) && !isEmpty(defaultValue)) {
      if (Number(lowerLimit) < 0) {
        setErrorInfo((x) => ({
          ...x,
          lowerLimit: 'Minimum range should be greater than 0',
        }));
        hasError = true;
      }
      if (Number(upperLimit) < 0) {
        setErrorInfo((x) => ({
          ...x,
          upperLimit: 'Maximum range should be greater than 0',
        }));
        hasError = true;
      }
      if (Number(lowerLimit) > Number(upperLimit)) {
        setErrorInfo((x) => ({
          ...x,
          lowerLimit: 'Minimum range should be less than maximum range',
        }));
        hasError = true;
      }
      if (Number(defaultValue) < Number(lowerLimit) || Number(defaultValue) > Number(upperLimit)) {
        setErrorInfo((x) => ({
          ...x,
          default: 'Default value not in range',
        }));
        hasError = true;
      }
    }
  }
  return !hasError;
};
