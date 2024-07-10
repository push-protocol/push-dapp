import { colorPrimitives } from '../colors/colors.primitives';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const checkboxSemantics = {
  'background-default': { light: surfaceSemantics['primary'].light, dark: surfaceSemantics['primary'].dark },
  'background-selected': { light: surfaceSemantics['brand-medium'].light, dark: surfaceSemantics['brand-medium'].dark },
  'background-disabled': { light: surfaceSemantics['disabled'].light, dark: surfaceSemantics['disabled'].dark },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-secondary': { light: textSemantics['secondary'].light, dark: textSemantics['secondary'].dark },
  'text-disabled': { light: textSemantics['disabled'].light, dark: textSemantics['disabled'].dark },

  'stroke-default': { light: textSemantics['brand-medium'].light, dark: textSemantics['brand-medium'].dark },
  'stroke-disabled': { light: textSemantics['disabled'].light, dark: textSemantics['disabled'].dark },

  'icon-default': { light: colorPrimitives['white-100'], dark: colorPrimitives['white-100'] },
};
