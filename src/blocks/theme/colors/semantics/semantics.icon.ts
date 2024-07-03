import { colorBrands } from '../colors.brands';

export const iconSemantics = {
  primary: { light: colorBrands['neutral-900'], dark: colorBrands['neutral-400'] },
  secondary: { light: colorBrands['neutral-200'], dark: colorBrands['neutral-100'] },
  tertiary: { light: colorBrands['neutral-300'], dark: colorBrands['neutral-700'] },

  'hero-icons': { light: colorBrands['neutral-1000'], dark: colorBrands['neutral-100'] },

  'brand-subtle': { light: colorBrands['primary-300'], dark: colorBrands['primary-400'] },
  'brand-medium': { light: colorBrands['primary-500'], dark: colorBrands['primary-400'] },
  'brand-bold': { light: colorBrands['primary-800'], dark: colorBrands['primary-300'] },

  // icon states

  'success-subtle': { light: colorBrands['success-200'], dark: colorBrands['success-600'] },
  'success-bold': { light: colorBrands['success-600'], dark: colorBrands['success-300'] },

  'info-subtle': { light: colorBrands['info-200'], dark: colorBrands['info-600'] },
  'info-bold': { light: colorBrands['info-600'], dark: colorBrands['info-200'] },

  'warning-subtle': { light: colorBrands['warning-200'], dark: colorBrands['warning-600'] },
  'warning-bold': { light: colorBrands['warning-600'], dark: colorBrands['warning-200'] },

  'danger-subtle': { light: colorBrands['danger-200'], dark: colorBrands['danger-600'] },
  'danger-bold': { light: colorBrands['danger-600'], dark: colorBrands['danger-300'] },

  disabled: { light: colorBrands['neutral-400'], dark: colorBrands['neutral-700'] },
};
