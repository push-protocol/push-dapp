import { TextInputStyles } from './TextInput.types';

//optimisation needed for this part
export const backgroundColor: TextInputStyles = {
  error: { light: 'red-100', dark: 'red-100' },
  disabled: { light: 'gray-200', dark: 'gray-800' },
  default: { light: 'white', dark: 'gray-800' },
};

export const borderColor: TextInputStyles = {
  error: { light: 'red-400', dark: 'red-400' },
  disabled: { light: 'gray-300', dark: 'gray-900' },
  default: { light: 'gray-200', dark: 'gray-800' },
};

export const textColor: TextInputStyles = {
  error: { light: 'red-700', dark: 'red-700' },
  disabled: { light: 'gray-400', dark: 'gray-700' },
  default: { light: 'gray-1000', dark: 'gray-100' },
};

export const placeholderColor: TextInputStyles = {
  error: { light: 'red-600', dark: 'red-600' },
  disabled: { light: 'gray-400', dark: 'gray-700' },
  default: { light: 'gray-400', dark: 'gray-500' },
};
