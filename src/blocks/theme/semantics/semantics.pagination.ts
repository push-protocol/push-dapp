import { colorBrands } from '../colors/colors.brands';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const paginationSemantics = {
  'background-default': { light: surfaceSemantics['tertiary'].light, dark: surfaceSemantics['tertiary'].dark },
  'background-hover': { light: colorBrands['neutral-300'], dark: colorBrands['neutral-300'] },
  'text-selected': {
    light: textSemantics['primary'].light,
    dark: textSemantics['primary'].dark,
  },
  'text-default': { light: textSemantics['tertiary'].light, dark: textSemantics['tertiary'].dark },
  'text-disabled': { light: textSemantics['secondary-inverse'].light, dark: textSemantics['secondary-inverse'].dark },
};
