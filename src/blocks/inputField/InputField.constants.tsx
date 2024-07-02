import { InputFieldStyles } from './InputField.types';

//optimisation needed for this part
export const backgroundColor: InputFieldStyles = {
  error: { light: 'red-100', dark: 'red-100' },
  disabled: { light: 'gray-200', dark: 'gray-600' },
  default: { light: 'white', dark: 'gray-800' },
};

export const borderColor: InputFieldStyles = {
  error: { light: 'red-400', dark: 'red-400' },
  disabled: { light: 'gray-300', dark: 'gray-900' },
  default: { light: 'gray-200', dark: 'gray-800' },
};

export const textColor: InputFieldStyles = {
  error: { light: 'red-700', dark: 'red-700' },
  disabled: { light: 'gray-400', dark: 'gray-700' },
  default: { light: 'gray-1000', dark: 'gray-100' },
};

export const descriptionColor: InputFieldStyles = {
  error: { light: 'red-700', dark: 'red-700' },
  disabled: { light: 'gray-600', dark: 'gray-600' },
  default: { light: 'gray-600', dark: 'gray-600' },
};
