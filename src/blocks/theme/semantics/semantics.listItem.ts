import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const listItemSemantics = {
  'background-default': {
    light: surfaceSemantics['primary'].light,
    dark: surfaceSemantics['primary'].dark
  },
  'background-hover': {
    light: surfaceSemantics['secondary'].light,
    dark: surfaceSemantics['secondary'].dark
  },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-success': {
    light: textSemantics['state-success-bold'].light,
    dark: textSemantics['state-success-subtle'].dark
  },
  'text-error': {
    light: textSemantics['state-danger-bold'].light,
    dark: textSemantics['state-danger-bold'].dark
  },

  'icon-default': { light: iconSemantics['primary'].light, dark: iconSemantics['primary'].dark },
  'icon-success': {
    light: iconSemantics['state-success-bold'].light,
    dark: iconSemantics['state-success-bold'].dark
  },
  'icon-error': {
    light: iconSemantics['state-danger-bold'].light,
    dark: iconSemantics['state-danger-bold'].dark
  },

  'stroke-default': { light: strokeSemantics['secondary'].light, dark: strokeSemantics['secondary'].dark }
};
