import { colorBrands } from '../colors/colors.brands';
import { colorPrimitives } from '../colors/colors.primitives';
import { surfaceSemantics } from './semantics.surface';

export const spinnerSemantics = {
  default: surfaceSemantics['brand-medium'],
  primary: { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  secondary: { light: colorBrands['neutral-800'], dark: colorPrimitives['white-100'] },
  tertiary: { light: colorBrands['neutral-300'], dark: colorPrimitives['white-100'] },
  outline: { light: colorBrands['neutral-900'], dark: colorBrands['neutral-100'] },
  danger: { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'danger-secondary': { light: colorBrands['danger-400'], dark: colorPrimitives['white-100'] },
};
