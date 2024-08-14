import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { surfaceSemantics } from './semantics.surface';
import { textSemantics } from './semantics.text';

export const tagSemantics = {
  'background-default': { light: surfaceSemantics['tertiary'].light, dark: surfaceSemantics['tertiary'].dark },
  'background-success': {
    light: surfaceSemantics['state-success-subtle'].light,
    dark: surfaceSemantics['state-success-subtle'].dark,
  },
  'background-danger': {
    light: surfaceSemantics['state-danger-subtle'].light,
    dark: surfaceSemantics['state-danger-subtle'].dark,
  },
  'background-warning': {
    light: surfaceSemantics['state-warning-subtle'].light,
    dark: surfaceSemantics['state-warning-subtle'].dark,
  },
  'background-info': {
    light: surfaceSemantics['state-info-subtle'].light,
    dark: surfaceSemantics['state-info-subtle'].dark,
  },
  'background-disabled': {
    light: surfaceSemantics['state-disabled'].light,
    dark: surfaceSemantics['state-disabled'].dark,
  },

  'stroke-bg': { light: strokeSemantics['secondary'].light, dark: strokeSemantics['secondary'].dark },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-success': { light: textSemantics['state-success-bold'].light, dark: textSemantics['state-success-bold'].dark },
  'text-warning': { light: textSemantics['state-warning-bold'].light, dark: textSemantics['state-warning-bold'].dark },
  'text-danger': { light: textSemantics['state-danger-bold'].light, dark: textSemantics['state-danger-bold'].dark },
  'text-info': { light: textSemantics['state-info-bold'].light, dark: textSemantics['state-info-bold'].dark },
  'text-disabled': { light: textSemantics['state-disabled'].light, dark: textSemantics['state-disabled'].dark },

  'icon-default': { light: iconSemantics['primary'].light, dark: iconSemantics['primary'].dark },
  'icon-success': { light: iconSemantics['state-success-bold'].light, dark: iconSemantics['state-success-bold'].dark },
  'icon-warning': { light: iconSemantics['state-warning-bold'].light, dark: iconSemantics['state-warning-bold'].dark },
  'icon-danger': { light: iconSemantics['state-danger-bold'].light, dark: iconSemantics['state-danger-bold'].dark },
  'icon-info': { light: iconSemantics['state-info-bold'].light, dark: iconSemantics['state-info-bold'].dark },
  'icon-disabled': { light: iconSemantics['state-disabled'].light, dark: iconSemantics['state-disabled'].dark },
};
