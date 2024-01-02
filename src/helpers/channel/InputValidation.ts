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
  sliderStep,
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
  sliderStep: string;
  type: ChannelSetting['type'];
  settingName: string;
  defaultValue: string | { lower: string, upper: string };
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

  if (type === 2 || type === 3) {
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
    if ((typeof defaultValue === "string" ? isEmpty(defaultValue) : (isEmpty(defaultValue.lower) || isEmpty(defaultValue.upper)))) {
      if (typeof defaultValue === "string") {
        setErrorInfo((x) => ({
          ...x,
          default: 'Default value is required',
        }));
      }
      else {
        if (isEmpty(defaultValue.lower)) 
          setErrorInfo((x) => ({
            ...x,
            defaultStart: 'Default start value is required',
          }));
        if (isEmpty(defaultValue.upper)) 
          setErrorInfo((x) => ({
            ...x,
            defaultEnd: 'Default end value is required',
          }));
      }
      hasError = true;
    }
    if (isEmpty(sliderStep)) {
      setErrorInfo((x) => ({
        ...x,
        sliderStep: 'Slider step is required',
      }));
      hasError = true;
    }
    if (!isEmpty(lowerLimit) && !isEmpty(upperLimit) && !isEmpty(sliderStep)) {
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
      if (typeof defaultValue === "string") {
        if (Number(defaultValue) < Number(lowerLimit) || Number(defaultValue) > Number(upperLimit)) {
          setErrorInfo((x) => ({
            ...x,
            default: 'Default value not in range',
          }));
          hasError = true;
        }
      } else {
        if (Number(defaultValue.lower) < Number(lowerLimit) || Number(defaultValue.lower) > Number(upperLimit)) {
          setErrorInfo((x) => ({
            ...x,
            defaultStart: 'Default value not in range',
          }));
          hasError = true;
        } 
        if (Number(defaultValue.upper) < Number(lowerLimit) || Number(defaultValue.upper) > Number(upperLimit) || Number(defaultValue.lower) > Number(defaultValue.upper)) {
          setErrorInfo((x) => ({
            ...x,
            defaultEnd: 'Default value not in range',
          }));
          hasError = true;
        } 
      }
      if (Number(sliderStep) <= 0) {
        setErrorInfo((x) => ({
          ...x,
          sliderStep: 'Slider step should be greater than 0',
        }));
        hasError = true;
      }
      if (Number(sliderStep) > Number(upperLimit) - Number(lowerLimit)) {
        setErrorInfo((x) => ({
          ...x,
          sliderStep: 'Slider step should be less than range',
        }));
        hasError = true;
      }
    }
  }
  return !hasError;
};
