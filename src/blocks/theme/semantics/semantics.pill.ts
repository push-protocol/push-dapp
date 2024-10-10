import { colorBrands } from '../colors/colors.brands';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const pillSemantics = {
  'background-default': { light: colorBrands['neutral-100'], dark: colorBrands['neutral-700'] },
  'background-selected': {
    light: surfaceSemantics['primary-inverse'].light,
    dark: surfaceSemantics['primary-inverse'].dark,
  },
  'background-hover': { light: colorBrands['neutral-200'], dark: colorBrands['neutral-800'] },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-selected': {
    light: textSemantics['primary-inverse'].light,
    dark: textSemantics['primary-inverse'].dark,
  },
};
