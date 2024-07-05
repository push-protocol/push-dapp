import { TextInputStyles } from './TextInput.types';

const backgroundColor: TextInputStyles = {
  error: { light: 'red-100', dark: 'gray-800' },
  success: { light: 'green-100', dark: 'gray-800' },
  disabled: { light: 'gray-200', dark: 'gray-800' },
  default: { light: 'white', dark: 'gray-800' },
};

const borderColor: TextInputStyles = {
  error: { light: 'red-400', dark: 'red-500' },
  success: { light: 'green-500', dark: 'green-400' },
  disabled: { light: 'gray-300', dark: 'gray-900' },
  default: { light: 'gray-200', dark: 'gray-800' },
};

const textColor: TextInputStyles = {
  error: { light: 'gray-1000', dark: 'gray-100' },
  success: { light: 'gray-1000', dark: 'gray-100' },
  disabled: { light: 'gray-400', dark: 'gray-700' },
  default: { light: 'gray-1000', dark: 'gray-100' },
};

const descriptionColor: TextInputStyles = {
  error: { light: 'gray-1000', dark: 'gray-100' },
  success: { light: 'gray-1000', dark: 'gray-100' },
  disabled: { light: 'gray-400', dark: 'gray-600' },
  default: { light: 'gray-400', dark: 'gray-600' },
};
const iconColor: TextInputStyles = {
  error: { light: 'red-700', dark: 'red-500' },
  success: { light: 'green-600', dark: 'green-400' },
  disabled: { light: 'gray-400', dark: 'gray-700' },
  default: { light: 'gray-300', dark: 'gray-700' },
};

export const textInputColor = {
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  textColor: textColor,
  iconColor: iconColor,
  descriptionColor: descriptionColor,
};
