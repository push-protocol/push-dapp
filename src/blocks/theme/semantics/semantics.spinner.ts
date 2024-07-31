import { colorBrands } from '../colors/colors.brands';
import { colorPrimitives } from '../colors/colors.primitives';
import { surfaceSemantics } from './semantics.surface';

export const spinnerSemantics = {
  'spinner-default': { light: surfaceSemantics['brand-medium'], dark: surfaceSemantics['brand-medium'] },
  'spinner-primary': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'spinner-secondary': { light: colorBrands['neutral-800'], dark: colorPrimitives['white-100'] },
  'spinner-tertiary': { light: colorBrands['neutral-300'], dark: colorPrimitives['white-100'] },
  'spinner-outline': { light: colorBrands['neutral-900'], dark: colorBrands['neutral-100'] },
  'spinner-danger': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
  'spinner-danger-secondary': { light: colorBrands['danger-400'], dark: colorPrimitives['white-100'] },
};
