import { colorBrands } from '../colors.brands';
import { colorPrimitives } from '../colors.primitives';
import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const toastSemantics = {
  'background-default': { light: surfaceSemantics['primary'].light, dark: surfaceSemantics['primary'].dark },
  'background-success': { light: colorPrimitives['white-100'], dark: surfaceSemantics['success-bold'].dark },
  'background-warning': { light: surfaceSemantics['danger-bold'].light, dark: surfaceSemantics['danger-bold'].dark },
  'background-error': { light: surfaceSemantics['warning-bold'].light, dark: surfaceSemantics['warning-bold'].dark },
  'background-info': { light: surfaceSemantics['info-bold'].light, dark: surfaceSemantics['info-bold'].dark },

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
