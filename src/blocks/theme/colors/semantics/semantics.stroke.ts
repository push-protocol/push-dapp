import { colorBrands } from '../colors.brands';

export const strokeSemantics = {
  primary: { light: colorBrands['neutral-100'], dark: colorBrands['neutral-900'] },
  secondary: { light: colorBrands['neutral-200'], dark: colorBrands['neutral-800'] },
  tertiary: { light: colorBrands['neutral-300'], dark: colorBrands['neutral-700'] },

  'brand-subtle': { light: colorBrands['primary-300'], dark: colorBrands['primary-500'] },
  'brand-medium': { light: colorBrands['primary-500'], dark: colorBrands['primary-400'] },
  'brand-bold': { light: colorBrands['primary-800'], dark: colorBrands['primary-300'] },

  // stroke states

  'success-subtle': { light: colorBrands['success-300'], dark: colorBrands['success-500'] },
  'success-bold': { light: colorBrands['success-700'], dark: colorBrands['success-300'] },

  'info-subtle': { light: colorBrands['info-300'], dark: colorBrands['info-500'] },
  'info-bold': { light: colorBrands['info-700'], dark: colorBrands['info-300'] },

  'warning-subtle': { light: colorBrands['warning-300'], dark: colorBrands['warning-500'] },
  'warning-bold': { light: colorBrands['warning-700'], dark: colorBrands['warning-300'] },

  'danger-subtle': { light: colorBrands['danger-300'], dark: colorBrands['danger-500'] },
  'danger-bold': { light: colorBrands['danger-500'], dark: colorBrands['danger-300'] },

  hover: { light: colorBrands['success-300'], dark: colorBrands['success-800'] },
  focus: { light: colorBrands['success-300'], dark: colorBrands['success-300'] },

  pressed: { light: colorBrands['info-800'], dark: colorBrands['info-300'] },
  disabled: { light: colorBrands['info-300'], dark: colorBrands['info-800'] },
};
