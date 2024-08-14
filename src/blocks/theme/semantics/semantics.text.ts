import { colorBrands } from '../colors/colors.brands';
import { colorPrimitives } from '../colors/colors.primitives';

export const textSemantics = {
  primary: { light: colorBrands['neutral-1000'], dark: colorBrands['neutral-100'] },
  secondary: { light: colorBrands['neutral-800'], dark: colorBrands['neutral-300'] },
  tertiary: { light: colorBrands['neutral-500'], dark: colorBrands['neutral-600'] },

  'primary-inverse': { light: colorPrimitives['white-100'], dark: colorPrimitives['black-100'] },
  'secondary-inverse': { light: colorBrands['neutral-400'], dark: colorBrands['neutral-700'] },
  'tertiary-inverse': { light: colorBrands['neutral-600'], dark: colorBrands['neutral-500'] },

  'brand-subtle': { light: colorBrands['primary-200'], dark: colorBrands['primary-200'] },
  'brand-medium': { light: colorBrands['primary-600'], dark: colorBrands['primary-400'] },
  'brand-bold': { light: colorBrands['primary-700'], dark: colorBrands['primary-800'] },

  'on-light-bg': { light: colorPrimitives['black-100'], dark: colorPrimitives['black-100'] },
  'on-dark-bg': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },

  // text states

  'state-success-subtle': { light: colorBrands['success-100'], dark: colorBrands['success-700'] },
  'state-success-bold': { light: colorBrands['success-500'], dark: colorBrands['success-300'] },

  'state-info-subtle': { light: colorBrands['info-100'], dark: colorBrands['info-700'] },
  'state-info-bold': { light: colorBrands['info-700'], dark: colorBrands['info-100'] },

  'state-warning-subtle': { light: colorBrands['warning-100'], dark: colorBrands['warning-700'] },
  'state-warning-bold': { light: colorBrands['warning-700'], dark: colorBrands['warning-100'] },

  'state-danger-subtle': { light: colorBrands['danger-100'], dark: colorBrands['danger-700'] },
  'state-danger-bold': { light: colorBrands['danger-700'], dark: colorBrands['danger-300'] },

  'state-disabled': { light: colorBrands['neutral-400'], dark: colorBrands['neutral-700'] },
};
