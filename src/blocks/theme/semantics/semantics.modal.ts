import { colorPrimitives } from '../colors/colors.primitives';
import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const modalSemantics = {
  'background-default': { light: surfaceSemantics['primary'].light, dark: surfaceSemantics['primary'].dark },

  'stroke-bg': { light: strokeSemantics['secondary'].light, dark: strokeSemantics['secondary'].dark },

  'text-default': {
    light: textSemantics['primary'].light,
    dark: textSemantics['primary'].dark,
  },
  'text-secondary': { light: textSemantics['tertiary'].light, dark: textSemantics['tertiary'].dark },
  'text-link': { light: colorPrimitives['pink-700'], dark: colorPrimitives['pink-400'] },

  'icon-success': { light: colorPrimitives['green-400'], dark: colorPrimitives['green-300'] },
  'icon-error': { light: colorPrimitives['red-700'], dark: colorPrimitives['red-600'] },
  'icon-warning': { light: colorPrimitives['yellow-400'], dark: colorPrimitives['yellow-300'] },
  'icon-info': { light: colorPrimitives['blue-600'], dark: colorPrimitives['blue-500'] },
  'icon-default': { light: iconSemantics['primary'].light, dark: iconSemantics['primary'].dark },
  'icon-secondary': { light: iconSemantics['secondary'].light, dark: iconSemantics['secondary'].dark },
};
