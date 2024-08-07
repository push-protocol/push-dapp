import { colorBrands } from '../colors/colors.brands';
import { colorPrimitives } from '../colors/colors.primitives';
import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const toastSemantics = {
  'background-default': { light: surfaceSemantics['primary'].light, dark: surfaceSemantics['primary'].dark },
  'background-success': { light: colorPrimitives['white-100'], dark: surfaceSemantics['state-success-bold'].dark },
  'background-warning': {
    light: surfaceSemantics['state-danger-bold'].light,
    dark: surfaceSemantics['state-danger-bold'].dark,
  },
  'background-error': {
    light: surfaceSemantics['state-warning-bold'].light,
    dark: surfaceSemantics['state-warning-bold'].dark,
  },
  'background-info': {
    light: surfaceSemantics['state-info-bold'].light,
    dark: surfaceSemantics['state-info-bold'].dark,
  },

  'stroke-bg': { light: strokeSemantics['secondary'].light, dark: strokeSemantics['secondary'].dark },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-secondary': { light: textSemantics['secondary'].light, dark: textSemantics['secondary'].dark },
  'text-link': { light: colorPrimitives['pink-700'], dark: colorPrimitives['pink-400'] },

  'icon-success': { light: colorPrimitives['green-400'], dark: colorBrands['success-300'] },
  'icon-warning': { light: colorPrimitives['red-700'], dark: colorBrands['danger-600'] },
  'icon-error': { light: colorPrimitives['yellow-400'], dark: colorBrands['warning-300'] },
  'icon-info': { light: colorPrimitives['blue-600'], dark: colorBrands['info-500'] },
  'icon-default': { light: iconSemantics['primary'].light, dark: iconSemantics['primary'].dark },
};
