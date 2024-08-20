import { iconSemantics } from './semantics.icon';
import { strokeSemantics } from './semantics.stroke';
import { textSemantics } from './semantics.text';

export const tableSemantics = {
  'stroke-default': { light: strokeSemantics['tertiary'].light, dark: strokeSemantics['tertiary'].dark },

  'text-default': { light: textSemantics['primary'].light, dark: textSemantics['primary'].dark },
  'text-heading': { light: textSemantics['tertiary'].light, dark: textSemantics['tertiary'].dark },
  'text-success': { light: textSemantics['state-success-bold'].light, dark: textSemantics['state-success-bold'].dark },
  'text-warning': { light: textSemantics['state-warning-bold'].light, dark: textSemantics['state-warning-bold'].dark },
  'text-danger': { light: textSemantics['state-danger-bold'].light, dark: textSemantics['state-danger-bold'].dark },
  'text-info': { light: textSemantics['state-info-bold'].light, dark: textSemantics['state-info-bold'].dark },
  'text-disabled': { light: textSemantics['state-disabled'].light, dark: textSemantics['state-disabled'].dark },

  'icon-default': { light: iconSemantics['primary'].light, dark: iconSemantics['primary'].dark },
  'icon-disabled': { light: iconSemantics['state-disabled'].light, dark: iconSemantics['state-disabled'].dark },
};
