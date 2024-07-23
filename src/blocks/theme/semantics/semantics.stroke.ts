import { colorBrands } from '../colors/colors.brands';

export const strokeSemantics = {
  primary: { light: colorBrands['neutral-100'], dark: colorBrands['neutral-900'] },
  secondary: { light: colorBrands['neutral-200'], dark: colorBrands['neutral-800'] },
  tertiary: { light: colorBrands['neutral-300'], dark: colorBrands['neutral-700'] },

  'brand-subtle': { light: colorBrands['primary-300'], dark: colorBrands['primary-500'] },
  'brand-medium': { light: colorBrands['primary-500'], dark: colorBrands['primary-400'] },
  'brand-bold': { light: colorBrands['primary-800'], dark: colorBrands['primary-300'] },

  // stroke states

  'state-success-subtle': { light: colorBrands['success-300'], dark: colorBrands['success-500'] },
  'state-success-bold': { light: colorBrands['success-700'], dark: colorBrands['success-300'] },

  'state-info-subtle': { light: colorBrands['info-300'], dark: colorBrands['info-500'] },
  'state-info-bold': { light: colorBrands['info-700'], dark: colorBrands['info-300'] },

  'state-warning-subtle': { light: colorBrands['warning-300'], dark: colorBrands['warning-500'] },
  'state-warning-bold': { light: colorBrands['warning-700'], dark: colorBrands['warning-300'] },

  'state-danger-subtle': { light: colorBrands['danger-300'], dark: colorBrands['danger-500'] },
  'state-danger-bold': { light: colorBrands['danger-500'], dark: colorBrands['danger-300'] },

  'state-hover': { light: colorBrands['success-300'], dark: colorBrands['success-800'] },
  'state-focus': { light: colorBrands['success-300'], dark: colorBrands['success-300'] },

  'state-pressed': { light: colorBrands['info-800'], dark: colorBrands['info-300'] },
  'state-disabled': { light: colorBrands['info-300'], dark: colorBrands['info-800'] },
};
